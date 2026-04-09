import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'MyBot/1.0 (ja@example.com)'
}

def get_coordinates(location: str) -> list:
    url: str = f"https://pl.wikipedia.org/wiki/{location}"
    response = requests.get(url, headers=headers)

    response_html = BeautifulSoup(response.text, "html.parser")

    response_html_lat = float(response_html.select(".latitude")[1].text.replace(",", "."))
    response_html_lng = float(response_html.select(".longitude")[1].text.replace(",", "."))
    return response_html_lat, response_html_lng

if __name__ == "__main__":
    get_coordinates("Warszawa")