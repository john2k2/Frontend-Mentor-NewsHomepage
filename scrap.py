import requests
import json
from bs4 import BeautifulSoup

URL = 'https://www.mangatigre.net/manga/yofukashi-no-uta'

# Hacer una solicitud HTTP a la página
page = requests.get(URL)

# Parsear el código HTML de la página
soup = BeautifulSoup(page.content, 'html.parser')

# Crear una lista para guardar la información que vayamos scrapeando
data = []

# Encontrar los elementos que queremos scrapear
titles = soup.find_all('a', class_='text-overflow')

# Iterar sobre los elementos y agregar la información a la lista
for title in titles:
  data.append(title.text)

# Convertir la lista a un string en formato JSON
json_data = json.dumps(data)


# Guardar el string en un archivo
with open('data.json', 'w') as f:
  f.write(json_data)
  


