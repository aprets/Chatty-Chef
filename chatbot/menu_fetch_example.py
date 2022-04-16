import json
import urllib.request
response = urllib.request.urlopen("https://europe-west2-chatty-chef.cloudfunctions.net/menu").read()
menu_items = json.loads(response)
print(menu_items[0])