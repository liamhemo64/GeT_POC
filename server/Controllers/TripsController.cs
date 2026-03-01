using Microsoft.AspNetCore.Mvc;
using GeTrip.API.Models;
using GeTrip.API.Services;

namespace GeTrip.API.Controllers;

[ApiController]
[Route("api/trips")]
public class TripsController : ControllerBase
{
    private readonly ILlmPromptService _llmPromptService;

    public TripsController(ILlmPromptService llmPromptService)
    {
        _llmPromptService = llmPromptService;
    }

    [HttpPost("generate-prompt")]
    public IActionResult GeneratePrompt([FromBody] TripRequestDto requestDto)
    {
        if (requestDto == null)
        {
            return BadRequest("Invalid trip request data.");
        }

        var generatedPrompt = _llmPromptService.GenerateBasePrompt(requestDto);
        
        Console.WriteLine($"\n=== GENERATED PROMPT ===\n{generatedPrompt}\n========================\n");
        return Ok(new { prompt = generatedPrompt });
    }
}
