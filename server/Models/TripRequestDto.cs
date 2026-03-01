namespace GeTrip.API.Models;

public record TripRequestDto(
    DateTime ArrivalDate,
    DateTime DepartureDate,
    string ArrivalCity,
    string DepartureCity,
    string GroupComposition,
    bool CarRental,
    string[] AmusementParks,
    int Pace,
    int NaturePreference,
    int CityPreference,
    string[] Interests,
    string FreeText
);
