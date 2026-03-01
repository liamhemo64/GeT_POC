using System.Text;
using GeTrip.API.Models;

namespace GeTrip.API.Services;

public interface ILlmPromptService
{
    string GenerateBasePrompt(TripRequestDto request);
}

public class LlmPromptService : ILlmPromptService
{
    public string GenerateBasePrompt(TripRequestDto request)
    {
        var days = (request.DepartureDate - request.ArrivalDate).TotalDays;
        var totalDays = Math.Max(1, (int)Math.Round(days));

        var paceText = request.Pace switch
        {
            1 => "relaxed and slow-paced",
            2 => "moderate and balanced pace",
            3 => "fast-paced and action-packed",
            _ => "moderate pace"
        };

        var natureText = request.NaturePreference switch
        {
            1 => "minimal nature focus",
            2 => "balanced nature and outdoor activities",
            3 => "heavy focus on nature, landscapes, and the outdoors",
            _ => "balanced nature focus"
        };

        var cityText = request.CityPreference switch
        {
            1 => "minimal urban exploration",
            2 => "balanced city sightseeing",
            3 => "heavy focus on bustling city life, metropolis exploration, and urban culture",
            _ => "balanced city exploration"
        };

        var sb = new StringBuilder();
        
        sb.Append($"A {totalDays}-day trip ");
        sb.Append($"starting in {request.ArrivalCity} and departing from {request.DepartureCity}. ");
        sb.Append($"This itinerary is perfect for a {request.GroupComposition}, ");
        
        if (request.CarRental)
        {
            sb.Append("who will rent a car and be comfortable with independent transportation. ");
        }
        else
        {
            sb.Append("who will rely on public transportation. ");
        }

        sb.Append($"The trip is designed to be {paceText}, with {natureText} and {cityText}. ");

        if (request.Interests != null && request.Interests.Length > 0)
        {
            var interestsList = string.Join(", ", request.Interests);
            sb.Append($"It is especially good for people who like {interestsList}. ");
        }

        if (request.AmusementParks != null && request.AmusementParks.Length > 0)
        {
            var parksList = string.Join(", ", request.AmusementParks);
            sb.Append($"The itinerary includes visits to theme parks: {parksList}. ");
        }

        if (!string.IsNullOrWhiteSpace(request.FreeText))
        {
            sb.Append($"Additional notes: {request.FreeText}");
        }

        return sb.ToString().Trim();
    }
}
