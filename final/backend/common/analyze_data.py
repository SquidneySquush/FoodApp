import json
import pandas as pd


def convert_data(result):
    return str(result).replace("'title'", r'title').replace("'desc'", r'desc').replace("'rate'", r'rate')\
                            .replace("'price'", r'price').replace("'vegetarian'", r'vegetarian')\
                            .replace("'catogory'", r'catogory').replace("'img'", r'img').replace("'url'", r'url').replace("]", "];")

def write_data(result):
    """title,desc,rate,price,vegetarian,catogory,img"""
    with open("../../recomendation_page/src/data2.js", "w") as f:
    # with open("./data.js", "w") as f:
        f.write("const menu = ")
        result = convert_data(result)
        f.write(result)
        f.write("\nexport default menu;")


def score_cal(inputs, zone, budget, cravings, preferring):
    score = 0
    if zone == inputs[0]:
        score += 0.4
    if len(budget) <= len(inputs[1]):
        score += 0.2
    if cravings == inputs[2]:
        score += 0.3
    if preferring == inputs[3]:
        score += 0.1
    return round(score, 2)


def analyze(p1, p2, p3, p4):
    """ title,desc,rate,price,vegetarian,catogory,img """
    df = pd.read_csv("../../dataset/dummy_data.csv", index_col=[0])
    proper_choices = {}
    inputs = [p1, p2, p3, p4]
    for i in range(len(df)):
        title, desc, rate, price, vegetarian, catogory, img, url = df.iloc[i].values

        score = score_cal(inputs, desc, price, vegetarian, catogory)
        proper_choices[str(i)] = score

    proper_choices = sorted(proper_choices.items(), key=lambda x: x[1], reverse=True)
    result = []
    for index in proper_choices:
        title, desc, rate, price, vegetarian, catogory, img, url = df.iloc[int(index[0])].values
        result.append({'title': title, 'desc': desc, 'url': url, 'rate': int(rate), 'price': price, 'vegetarian': vegetarian,
                       'category': catogory, 'img': img})
    write_data(result)
    return json.dumps(result, ensure_ascii=False)
