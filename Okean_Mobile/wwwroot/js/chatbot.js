document.addEventListener('DOMContentLoaded', function() {
    // Tạo icon chatbot
    const chatbotIcon = document.createElement('div');
    chatbotIcon.className = 'chatbot-icon';
    chatbotIcon.innerHTML = '<i class="fas fa-comments"></i>';
    document.body.appendChild(chatbotIcon);

    // Tạo container chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot-container';
    chatbotContainer.innerHTML = `
        <div class="chatbot-header">
            <h3><i class="fas fa-robot"></i> Okean Mobile Assistant</h3>
            <button class="close-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="chatbot-messages"></div>
        <div class="chatbot-input">
            <input type="text" placeholder="Nhập tin nhắn của bạn..." maxlength="500">
            <button class="voice-btn" title="Ghi âm"><i class="fas fa-microphone"></i></button>
            <button class="send-btn" title="Gửi tin nhắn"><i class="fas fa-paper-plane"></i></button>
        </div>
        <div class="chatbot-footer">
            <small>Powered by Azure OpenAI</small>
        </div>
    `;
    document.body.appendChild(chatbotContainer);

    // Tạo overlay
    const chatbotOverlay = document.createElement('div');
    chatbotOverlay.className = 'chatbot-overlay';
    document.body.appendChild(chatbotOverlay);

    // Lấy các elements
    const sendBtn = chatbotContainer.querySelector('.send-btn');
    const input = chatbotContainer.querySelector('input');
    const closeBtn = chatbotContainer.querySelector('.close-btn');
    const voiceBtn = chatbotContainer.querySelector('.voice-btn');
    const messagesContainer = chatbotContainer.querySelector('.chatbot-messages');
    const statusDot = chatbotContainer.querySelector('.status-dot');
    const statusText = chatbotContainer.querySelector('.status-text');

    let isChatbotVisible = false;
    let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];

    // Kiểm tra trạng thái kết nối
    async function checkConnection() {
        try {
            const response = await fetch('/api/chatbot/health');
            if (response.ok) {
                statusDot.classList.add('online');
                statusText.textContent = 'Online';
            } else {
                statusDot.classList.remove('online');
                statusText.textContent = 'Offline';
            }
        } catch (error) {
            statusDot.classList.remove('online');
            statusText.textContent = 'Offline';
        }
    }

    // Kiểm tra kết nối khi khởi tạo
    checkConnection();

    // Hiển thị chatbot
    function showChatbot() {
        if (!isChatbotVisible) {
            isChatbotVisible = true;
            chatbotContainer.classList.add('active');
            chatbotOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            input.focus();
            
            // Thêm tin nhắn chào mừng nếu chưa có tin nhắn nào
            if (messagesContainer.children.length === 0) {
                addMessage('Xin chào! Tôi là trợ lý ảo của Okean Mobile. Tôi có thể giúp gì cho bạn?', 'bot');
            }
        }
    }

    // Ẩn chatbot
    function hideChatbot() {
        if (isChatbotVisible) {
            isChatbotVisible = false;
            chatbotContainer.classList.remove('active');
            chatbotOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Xử lý sự kiện click vào icon
    chatbotIcon.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!isChatbotVisible) {
            showChatbot();
        }
    });

    // Xử lý sự kiện click vào nút đóng
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        hideChatbot();
    });

    // Xử lý sự kiện click vào overlay
    chatbotOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        hideChatbot();
    });

    // Xử lý sự kiện click vào container để ngăn chặn việc đóng khi click vào nội dung
    chatbotContainer.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Xử lý sự kiện phím ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isChatbotVisible) {
            hideChatbot();
        }
    });

    // Gửi tin nhắn
    async function sendMessage(message) {
        if (!message.trim()) return;

        addMessage(message, 'user');
        input.value = '';

        // Disable input và button trong khi xử lý
        input.disabled = true;
        sendBtn.disabled = true;
        voiceBtn.disabled = true;

        // Hiển thị typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            // Gửi tin nhắn đến server
            const response = await fetch('/api/chatbot/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]')?.value
                },
                body: JSON.stringify({ message: message })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.success) {
                typingIndicator.remove();
                addMessage(data.message, 'bot');
            } else {
                throw new Error(data.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error:', error);
            typingIndicator.remove();
            addMessage('Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.', 'bot', 'error');
        } finally {
            // Re-enable input và button
            input.disabled = false;
            sendBtn.disabled = false;
            voiceBtn.disabled = false;
            input.focus();
        }
    }

    // Thêm tin nhắn vào giao diện
    function addMessage(text, sender, type = 'normal') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        if (type === 'error') {
            messageDiv.classList.add('error');
        }
        
        // Xử lý text với line breaks
        const formattedText = text.replace(/\n/g, '<br>');
        messageDiv.innerHTML = formattedText;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Xử lý ghi âm
    async function startVoiceRecording() {
        if (isRecording) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            isRecording = true;
            
            // Thay đổi icon và style
            voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
            voiceBtn.classList.add('recording');
            
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = async () => {
                isRecording = false;
                voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                voiceBtn.classList.remove('recording');
                
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const formData = new FormData();
                formData.append('audioFile', audioBlob);

                // Hiển thị typing indicator
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'typing-indicator';
                typingIndicator.innerHTML = '<span></span><span></span><span></span>';
                messagesContainer.appendChild(typingIndicator);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;

                try {
                    const response = await fetch('/api/chatbot/speech-to-text', {
                        method: 'POST',
                        body: formData
                    });

                    if (!response.ok) {
                        throw new Error('Speech to text failed');
                    }

                    const data = await response.json();
                    typingIndicator.remove();
                    
                    if (data.success && data.text) {
                        addMessage(`🎤 "${data.text}"`, 'user');
                        await sendMessage(data.text);
                    } else {
                        addMessage('Xin lỗi, không thể nhận diện giọng nói của bạn. Vui lòng thử lại.', 'bot', 'error');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    typingIndicator.remove();
                    addMessage('Xin lỗi, không thể xử lý giọng nói của bạn. Vui lòng thử lại sau.', 'bot', 'error');
                }

                audioChunks = [];
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            addMessage('🎤 Đang ghi âm... (Nhấn lại để dừng)', 'bot');
            
            // Dừng ghi âm sau 10 giây
            setTimeout(() => {
                if (mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                }
            }, 10000);

        } catch (error) {
            console.error('Error accessing microphone:', error);
            addMessage('Xin lỗi, không thể truy cập microphone của bạn. Vui lòng kiểm tra quyền truy cập.', 'bot', 'error');
            isRecording = false;
        }
    }

    // Dừng ghi âm
    function stopVoiceRecording() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }
    }

    // Gắn sự kiện
    sendBtn.addEventListener('click', () => sendMessage(input.value));
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input.value);
        }
    });
    
    voiceBtn.addEventListener('click', () => {
        if (isRecording) {
            stopVoiceRecording();
        } else {
            startVoiceRecording();
        }
    });

    // Auto-resize input
    input.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 100) + 'px';
    });

    // Thêm sự kiện để đóng chatbot khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (isChatbotVisible && 
            !chatbotContainer.contains(e.target) && 
            !chatbotIcon.contains(e.target)) {
            hideChatbot();
        }
    });
}); 