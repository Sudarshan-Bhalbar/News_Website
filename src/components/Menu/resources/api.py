import requests

url = f"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0f644b97cbf143ccb6926d5e4d112ad4"

main_page = requests.get(url).json()
article = main_page["articles"]
head = []
for ar in article:
    head.append(ar["description"])
for i in range(6):
    print(f"{i+1} {head[i]} \n")