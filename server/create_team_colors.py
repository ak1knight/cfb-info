import json

with open('teams.json', 'r') as f:
    teams = json.load(f)

with open('team_colors_prep.json', 'w') as f:
    f.writelines(json.dumps([{k:v for (k,v) in team.items() if k in ['TeamID', 'School', 'Name', 'Conference']} for team in teams]))
