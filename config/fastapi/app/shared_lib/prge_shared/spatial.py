import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'MyBot/1.0 (ja@example.com)'
}


def get_coordinates(location: str) -> list:
    try:
        search_term = location
        # Jeśli w adresie jest przecinek, bierzemy tylko ostatni człon (zazwyczaj miasto)
        if "," in location:
            search_term = location.split(",")[-1].strip()

        url: str = f"https://pl.wikipedia.org/wiki/{search_term}"
        response = requests.get(url, headers=headers)

        # Jeśli Wikipedia nie ma strony dla danego hasła, zwracamy koordynaty Warszawy jako fallback
        if response.status_code != 200:
            print(f"Nie znaleziono strony na Wikipedii dla: {search_term}. Zwracam domyślne współrzędne.")
            return [52.2297, 21.0122]

        response_html = BeautifulSoup(response.text, "html.parser")

        lat_elements = response_html.select(".latitude")
        lng_elements = response_html.select(".longitude")

        if len(lat_elements) > 1 and len(lng_elements) > 1:
            response_html_lat = float(lat_elements[1].text.replace(",", "."))
            response_html_lng = float(lng_elements[1].text.replace(",", "."))
            return [response_html_lat, response_html_lng]

        return [52.2297, 21.0122]

    except Exception as e:
        print(f"Błąd podczas pobierania współrzędnych dla {location}: {e}")
        return [52.2297, 21.0122]