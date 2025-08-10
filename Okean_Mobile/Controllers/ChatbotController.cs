using Microsoft.AspNetCore.Mvc;
using Okean_Mobile.Services;
using System.Threading.Tasks;

namespace Okean_Mobile.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatbotController : ControllerBase
    {
        private readonly IChatbotService _chatbotService;

        public ChatbotController(IChatbotService chatbotService)
        {
            _chatbotService = chatbotService;
        }

        [HttpPost("chat")]
        public async Task<IActionResult> ProcessMessage([FromBody] ChatRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Message))
            {
                return BadRequest(new { error = "Message cannot be empty" });
            }

            try
            {
                var response = await _chatbotService.ProcessMessageAsync(request.Message);
                return Ok(new { message = response, success = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while processing your message", details = ex.Message });
            }
        }

        [HttpPost("speech-to-text")]
        public async Task<IActionResult> ProcessSpeechToText([FromForm] IFormFile audioFile)
        {
            if (audioFile == null || audioFile.Length == 0)
            {
                return BadRequest(new { error = "Audio file is required" });
            }

            try
            {
                using var stream = audioFile.OpenReadStream();
                var text = await _chatbotService.ProcessSpeechToTextAsync(stream);
                return Ok(new { text = text, success = true });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred while processing speech", details = ex.Message });
            }
        }

        [HttpGet("health")]
        public IActionResult HealthCheck()
        {
            return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
        }
    }

    public class ChatRequest
    {
        public string Message { get; set; }
    }
} 