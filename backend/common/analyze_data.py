import json
import pandas as pd


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
  return round(score,2)


def analyze(p1,p2,p3,p4):
    df = pd.read_csv("../dataset/dummy_data.csv", index_col=[0])
    proper_choices = {}
    inputs = [p1, p2, p3, p4]
    for i in range(len(df)):
        name, zone, rate, budget, preferring, cravings = df.iloc[i].values

        score = score_cal(inputs, zone, budget, cravings, preferring)
        proper_choices[name] = score

    proper_choices = sorted(proper_choices.items(), key=lambda x: x[1], reverse=True)
    result = {"r1": proper_choices[0][0], "r2": proper_choices[1][0], "r3": proper_choices[2][0], "r4": proper_choices[3][0]}
    return json.dumps(result, ensure_ascii= False)