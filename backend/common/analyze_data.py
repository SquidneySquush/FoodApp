import json
import pandas as pd


def write_data(result):
    with open("C:/Users/99596/Desktop/curriculum/SDP/menu-list-master/src/data.js", "w") as f:
        f.write("const menu = [\n")
        for option in result:
            content = str(option).replace("   ", "").replace(r"'title'", r'  title').replace(r"'desc'", r' desc').replace(r"'desc'", r' desc') \
                .replace(r"'price'", r' price').replace(r"'vegetarian'", r' vegetarian').replace(r"'category'", r' category') \
                .replace(r"'rate'", r' rate').replace(r'{', ' {\n').replace(",", ",\n").replace("}", "\n },")
            # content = re.sub(r'[\']title[\']([^,]+),', '\n\ttitle\1,\n', str(option))
            f.write(content + "\n")
        f.write("];\nexport default menu;")


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
    df = pd.read_csv("../dataset/dummy_data.csv", index_col=[0])
    proper_choices = {}
    inputs = [p1, p2, p3, p4]
    for i in range(len(df)):
        name, zone, rate, budget, preferring, cravings = df.iloc[i].values

        score = score_cal(inputs, zone, budget, cravings, preferring)
        proper_choices[str(i)] = score

    proper_choices = sorted(proper_choices.items(), key=lambda x: x[1], reverse=True)
    result = []
    for index in proper_choices:
        name, zone, rate, budget, preferring, cravings = df.iloc[int(index[0])].values
        result.append({'title': name,'desc': zone, 'rate': int(rate), 'price': budget, 'vegetarian': preferring,
                       'category': cravings})
    write_data(result)
    return json.dumps(result, ensure_ascii=False)
