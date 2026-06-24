import urllib.request

try:
    with urllib.request.urlopen("http://localhost:3000/") as response:
        html = response.read().decode("utf-8")

        checks = [
            ("Resume section exists", 'id="resume"' in html),
            ("Heading says Resume", ">Resume</h2>" in html),
            ("No Resume Center text", "Resume Center" not in html),
            ("No Curriculum Vitae", "Curriculum Vitae" not in html),
            ("No SHANMUKHA filename", "SHANMUKHA_RANI" not in html),
            ("No FETCHING text", "FETCHING" not in html),
            ("View Resume button", "View Resume" in html),
            ("Download Resume button", "Download Resume" in html),
            ("No SkillExplorer section", "Chart the Skill Map" not in html),
            ("Opens in new tab", 'target="_blank"' in html),
        ]

        for check, result in checks:
            status = "PASS" if result else "FAIL"
            print(f"[{status}] {check}")

        resume_pos = html.find('id="resume"')
        skills_pos = html.find('id="skills"')
        github_pos = html.find('id="github"')
        print(f"\nSection positions - Skills: {skills_pos}, Resume: {resume_pos}, GitHub: {github_pos}")
        if skills_pos > 0 and resume_pos > 0 and github_pos > 0:
            if skills_pos < resume_pos < github_pos:
                print("[PASS] Resume is between Skills and GitHub")
            else:
                print("[FAIL] Resume is NOT correctly positioned")
        else:
            print("[INFO] Could not find all section IDs to verify order")
except Exception as e:
    print("Error:", e)
