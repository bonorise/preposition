#!/usr/bin/env python3
"""Insert SEO_METADATA_OVERRIDES for 36 missing prepositions into prepositionSeo.ts"""

import re

with open('src/lib/prepositionSeo.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find existing keys
start = content.find('const SEO_METADATA_OVERRIDES')
end = content.find('function getSeoCategories')
section = content[start:end]
words = re.findall(r'^\s{2}([a-z][\w-]*):\s*\{', section, re.MULTILINE)
quoted = re.findall(r'^\s{2}"([\w-]+)":\s*\{', section, re.MULTILINE)
existing = set(words) | set(quoted)

# Build entries for missing keys only
# Each entry is a Python dict that we'll serialize to TypeScript-like format
entries = {}

entries['in'] = {
    'en': {
        'title': 'in (preposition): meaning (inside a boundary) + examples | Preposition Dino',
        'description': 'in means inside a boundary or enclosure. It is one of the most common English prepositions, used for location, time, and state. Examples: in the room, in the city, in the morning.',
    },
    'zh-CN': {
        'title': 'in: meaning, place use, and examples | Preposition Dino',
        'description': 'in 表示在某个范围或边界之内，是英语中最常用的介词之一。用于地点、时间和状态。例句：在房间里 in the room，在城市里 in the city。',
    },
}

entries['on'] = {
    'en': {
        'title': 'on (preposition): meaning (on a surface) + examples | Preposition Dino',
        'description': 'on means supported by or in contact with a surface. It is used for position, days, and topics. Examples: on the table, on Monday, on the topic.',
    },
    'zh-CN': {
        'title': 'on: meaning, place use, and examples | Preposition Dino',
        'description': 'on 表示在某一表面上（接触或支撑），用于位置、日期和话题。例句：在桌子上 on the table，在星期一 on Monday。',
    },
}

entries['under'] = {
    'en': {
        'title': 'under (preposition): meaning (below) + examples | Preposition Dino',
        'description': 'under means directly below, with possible contact or close proximity. It is the opposite of over. Examples: under the table, under the bridge, under pressure.',
    },
    'zh-CN': {
        'title': 'under: meaning, place use, and examples | Preposition Dino',
        'description': 'under 表示在正下方，可能接触或非常接近，是 over 的反义词。例句：在桌子下面 under the table，在桥下 under the bridge。',
    },
}

entries['over'] = {
    'en': {
        'title': 'over (preposition): meaning (above, across) + examples | Preposition Dino',
        'description': 'over means above in position, or moving across to the other side. It can also mean more than. Examples: over the mountain, over the bridge, over 100 people.',
    },
    'zh-CN': {
        'title': 'over: meaning, place use, and examples | Preposition Dino',
        'description': 'over 表示在上方位置，或移动到另一边，也可表示超过。例句：翻过山 over the mountain，在桥上 over the bridge，超过100人 over 100 people。',
    },
}

entries['behind'] = {
    'en': {
        'title': 'behind (preposition): meaning (at the back of) + examples | Preposition Dino',
        'description': 'behind means at the back of or posterior to something. It is the opposite of in front of. Examples: behind the door, behind the building.',
    },
    'zh-CN': {
        'title': 'behind: meaning, place use, and examples | Preposition Dino',
        'description': 'behind 表示在后面，与 in front of 相反。例句：在门后面 behind the door，在建筑物后面 behind the building。',
    },
}

entries['below'] = {
    'en': {
        'title': 'below (preposition): meaning (lower than) + examples | Preposition Dino',
        'description': 'below means at a lower level than something. It is not in contact. Examples: below the window, below the surface.',
    },
    'zh-CN': {
        'title': 'below: meaning, place use, and examples | Preposition Dino',
        'description': 'below 表示低于某物，不一定接触。例句：在窗户下面 below the window，在水面以下 below the surface。',
    },
}

entries['beside'] = {
    'en': {
        'title': 'beside (preposition): meaning (next to) + examples | Preposition Dino',
        'description': 'beside means immediately next to, at the side of. It is more precise than near. Examples: sit beside me, beside the window.',
    },
    'zh-CN': {
        'title': 'beside: meaning, place use, and examples | Preposition Dino',
        'description': 'beside 表示紧挨着，在旁边，比 near 更精确。例句：坐在我旁边 sit beside me，在窗户旁边 beside the window。',
    },
}

entries['next-to'] = {
    'en': {
        'title': 'next to (preposition): meaning (adjacent to) + examples | Preposition Dino',
        'description': 'next to means immediately adjacent, in the closest position beside something. Examples: next to the door, next to the station.',
    },
    'zh-CN': {
        'title': 'next to: meaning, place use, and examples | Preposition Dino',
        'description': 'next to 表示紧邻，在隔壁，是最接近的相邻位置。例句：门旁边 next to the door，车站隔壁 next to the station。',
    },
}

entries['near'] = {
    'en': {
        'title': 'near (preposition): meaning (close to) + examples | Preposition Dino',
        'description': 'near means at a short distance from something, not exactly beside but within reach. Examples: near the park, near the school.',
    },
    'zh-CN': {
        'title': 'near: meaning, place use, and examples | Preposition Dino',
        'description': 'near 表示在附近，短距离内，不一定是正旁边但在可及范围内。例句：在公园附近 near the park，在学校附近 near the school。',
    },
}

entries['off'] = {
    'en': {
        'title': 'off (preposition): meaning (away from, detached from) + examples | Preposition Dino',
        'description': 'off means away from a surface or position, or detached from. It is the opposite of on. Examples: off the table, take off the shelf.',
    },
    'zh-CN': {
        'title': 'off: meaning, place use, and examples | Preposition Dino',
        'description': 'off 表示离开某个表面或位置，或脱离，是 on 的反义词。例句：从桌子上 off the table，从架子上取下 take off the shelf。',
    },
}

entries['up'] = {
    'en': {
        'title': 'up (preposition): meaning (along, upward) + examples | Preposition Dino',
        'description': 'up means toward a higher position or along a direction. It is the opposite of down. Examples: walk up the hill, go up the street.',
    },
    'zh-CN': {
        'title': 'up: meaning, place use, and examples | Preposition Dino',
        'description': 'up 表示朝向更高位置，或沿着某个方向，是 down 的反义词。例句：上山 walk up the hill，沿着街走 go up the street。',
    },
}

entries['down'] = {
    'en': {
        'title': 'down (preposition): meaning (along, downward) + examples | Preposition Dino',
        'description': 'down means toward a lower position or along a direction. It is the opposite of up. Examples: walk down the hill, go down the street.',
    },
    'zh-CN': {
        'title': 'down: meaning, place use, and examples | Preposition Dino',
        'description': 'down 表示朝向更低位置，或沿着某个方向，是 up 的反义词。例句：下山 walk down the hill，沿着街走 go down the street。',
    },
}

entries['into'] = {
    'en': {
        'title': 'into (preposition): meaning (entering) + examples | Preposition Dino',
        'description': 'into means moving from outside to inside, or changing state. Examples: go into the room, turn into a butterfly.',
    },
    'zh-CN': {
        'title': 'into: meaning, place use, and examples | Preposition Dino',
        'description': 'into 表示从外部进入内部，或状态转变。例句：进入房间 go into the room，变成蝴蝶 turn into a butterfly。',
    },
}

entries['onto'] = {
    'en': {
        'title': 'onto (preposition): meaning (moving onto a surface) + examples | Preposition Dino',
        'description': 'onto means moving to and making contact with a surface. Examples: jump onto the table, climb onto the roof.',
    },
    'zh-CN': {
        'title': 'onto: meaning, place use, and examples | Preposition Dino',
        'description': 'onto 表示移动到某表面上并接触。例句：跳到桌上 jump onto the table，爬到屋顶 climb onto the roof。',
    },
}

entries['out-of'] = {
    'en': {
        'title': 'out of (preposition): meaning (from inside, exiting) + examples | Preposition Dino',
        'description': 'out of means moving from inside to outside, or away from. Examples: walk out of the room, get out of the car.',
    },
    'zh-CN': {
        'title': 'out of: meaning, place use, and examples | Preposition Dino',
        'description': 'out of 表示从内部到外部，或离开。例句：从房间走出来 walk out of the room，下车 get out of the car。',
    },
}

entries['during'] = {
    'en': {
        'title': 'during (preposition): meaning (throughout a period) + examples | Preposition Dino',
        'description': 'during means throughout the entire duration of a period. Examples: during the summer, during the meeting.',
    },
    'zh-CN': {
        'title': 'during: meaning, time use, and examples | Preposition Dino',
        'description': 'during 表示在某个时间段内从头到尾。例句：整个夏天 during the summer，会议期间 during the meeting。',
    },
}

entries['until'] = {
    'en': {
        'title': 'until (preposition): meaning (up to a point) + examples | Preposition Dino',
        'description': 'until means up to a particular point in time. Examples: wait until tomorrow, stay until 5pm.',
    },
    'zh-CN': {
        'title': 'until: meaning, time use, and examples | Preposition Dino',
        'description': 'until 表示直到某个时间点。例句：等到明天 wait until tomorrow，呆到下午5点 stay until 5pm。',
    },
}

entries['toward'] = {
    'en': {
        'title': 'toward (preposition): meaning (in the direction of) + examples | Preposition Dino',
        'description': 'toward means in the direction of, approaching but not necessarily reaching. Examples: walk toward the door, toward the future.',
    },
    'zh-CN': {
        'title': 'toward: meaning, place use, and examples | Preposition Dino',
        'description': 'toward 表示朝向，向着，接近但不一定到达。例句：朝门走去 walk toward the door，迈向未来 toward the future。',
    },
}

entries['throughout'] = {
    'en': {
        'title': 'throughout (preposition): meaning (in every part of) + examples | Preposition Dino',
        'description': 'throughout means in every part of, or from beginning to end of. Examples: throughout the country, throughout the day.',
    },
    'zh-CN': {
        'title': 'throughout: meaning, time use, and examples | Preposition Dino',
        'description': 'throughout 表示遍及每一部分，或从头到尾。例句：遍布全国 throughout the country，一整天 throughout the day。',
    },
}

entries['via'] = {
    'en': {
        'title': 'via (preposition): meaning (through, by way of) + examples | Preposition Dino',
        'description': 'via means by way of, through a place or method. Examples: fly via London, send via email.',
    },
    'zh-CN': {
        'title': 'via: meaning, place use, and examples | Preposition Dino',
        'description': 'via 表示经由，通过某个地方或方式。例句：经由伦敦飞 fly via London，通过邮件发送 send via email。',
    },
}

entries['with'] = {
    'en': {
        'title': 'with (preposition): meaning (accompanied by, using) + examples | Preposition Dino',
        'description': 'with means accompanied by, in the presence of, or using. It is one of the most common English prepositions. Examples: go with me, write with a pen.',
    },
    'zh-CN': {
        'title': 'with: meaning, place use, and examples | Preposition Dino',
        'description': 'with 表示和一起，有……存在，或使用工具，是最常用的介词之一。例句：和我一起去 go with me，用笔写 write with a pen。',
    },
}

entries['within'] = {
    'en': {
        'title': 'within (preposition): meaning (inside a limit) + examples | Preposition Dino',
        'description': 'within means inside a boundary or before a deadline, more formal than inside. Examples: within the city, within an hour.',
    },
    'zh-CN': {
        'title': 'within: meaning, place use, and examples | Preposition Dino',
        'description': 'within 表示在边界之内或截止时间之前，比 inside 更正式。例句：在城市范围内 within the city，一小时内 within an hour。',
    },
}

entries['without'] = {
    'en': {
        'title': 'without (preposition): meaning (outside boundaries) + examples | Preposition Dino',
        'description': 'without means outside a limit or boundary, opposite of within. Examples: without the city walls, without permission.',
    },
    'zh-CN': {
        'title': 'without: meaning, place use, and examples | Preposition Dino',
        'description': 'without 表示在范围或边界之外，是 within 的反义词。例句：在城墙之外 without the city walls，未经允许 without permission。',
    },
}

entries['along'] = {
    'en': {
        'title': 'along (preposition): meaning (on a line) + examples | Preposition Dino',
        'description': 'along means on a line or path, moving forward on something long. Examples: walk along the road, along the river.',
    },
    'zh-CN': {
        'title': 'along: meaning, place use, and examples | Preposition Dino',
        'description': 'along 表示沿着一条线或路径，在狭长的东西上移动。例句：沿着路走 walk along the road，沿着河走 along the river。',
    },
}

entries['alongside'] = {
    'en': {
        'title': 'alongside (preposition): meaning (next to, beside) + examples | Preposition Dino',
        'description': 'alongside means right next to, at the side of something long. Examples: park alongside the curb, sit alongside the wall.',
    },
    'zh-CN': {
        'title': 'alongside: meaning, place use, and examples | Preposition Dino',
        'description': 'alongside 表示紧挨着，在狭长物体的旁边。例句：靠着路边停车 park alongside the curb，靠墙坐着 sit alongside the wall。',
    },
}

entries['away-from'] = {
    'en': {
        'title': 'away from (preposition): meaning (at a distance from) + examples | Preposition Dino',
        'description': 'away from means at a distance from, moving away. Examples: stay away from the fire, away from home.',
    },
    'zh-CN': {
        'title': 'away from: meaning, place use, and examples | Preposition Dino',
        'description': 'away from 表示远离，离开某物或某地。例句：远离火 stay away from the fire，离开家 away from home。',
    },
}

entries['due-to'] = {
    'en': {
        'title': 'due to (preposition): meaning (because of) + examples | Preposition Dino',
        'description': 'due to means because of, caused by. It is often used to explain reasons. Examples: closed due to rain, late due to traffic.',
    },
    'zh-CN': {
        'title': 'due to: meaning, time use, and examples | Preposition Dino',
        'description': 'due to 表示因为，由于，用于解释原因。例句：因雨关闭 closed due to rain，因交通拥堵迟到 late due to traffic。',
    },
}

entries['including'] = {
    'en': {
        'title': 'including (preposition): meaning (containing, as part of) + examples | Preposition Dino',
        'description': 'including means containing, as part of a group. Examples: including you, including tax.',
    },
    'zh-CN': {
        'title': 'including: meaning, place use, and examples | Preposition Dino',
        'description': 'including 表示包括，包含，作为群体的一部分。例句：包括你 including you，含税 including tax。',
    },
}

entries['instead-of'] = {
    'en': {
        'title': 'instead of (preposition): meaning (in place of) + examples | Preposition Dino',
        'description': 'instead of means in place of, as an alternative to. Examples: tea instead of coffee, instead of going.',
    },
    'zh-CN': {
        'title': 'instead of: meaning, place use, and examples | Preposition Dino',
        'description': 'instead of 表示代替，而不是，作为替代选择。例句：用茶代替咖啡 tea instead of coffee，不去 instead of going。',
    },
}

entries['since'] = {
    'en': {
        'title': 'since (preposition): meaning (from a past point until now) + examples | Preposition Dino',
        'description': 'since means from a past point in time until now. Examples: since 2020, since yesterday.',
    },
    'zh-CN': {
        'title': 'since: meaning, time use, and examples | Preposition Dino',
        'description': 'since 表示从过去某个时间点到现在。例句：自从2020年 since 2020，自从昨天 since yesterday。',
    },
}

entries['according-to'] = {
    'en': {
        'title': 'according to (preposition): meaning (as stated by) + examples | Preposition Dino',
        'description': 'according to means as stated by or based on a source. Examples: according to the news, according to the map.',
    },
    'zh-CN': {
        'title': 'according to: meaning, place use, and examples | Preposition Dino',
        'description': 'according to 表示根据，按照，依据某个来源。例句：根据新闻 according to the news，根据地图 according to the map。',
    },
}

entries['ahead-of'] = {
    'en': {
        'title': 'ahead of (preposition): meaning (in front of, before) + examples | Preposition Dino',
        'description': 'ahead of means in front of in space, or before in time. Examples: ahead of the car, ahead of schedule.',
    },
    'zh-CN': {
        'title': 'ahead of: meaning, place use, and examples | Preposition Dino',
        'description': 'ahead of 表示在空间上领先，或在时间上提前。例句：在车前面 ahead of the car，提前完成 ahead of schedule。',
    },
}

entries['apart-from'] = {
    'en': {
        'title': 'apart from (preposition): meaning (except for, in addition to) + examples | Preposition Dino',
        'description': 'apart from means except for, or in addition to. Examples: apart from that, apart from the cost.',
    },
    'zh-CN': {
        'title': 'apart from: meaning, place use, and examples | Preposition Dino',
        'description': 'apart from 表示除了……还有，且别提。例句：除此之外 apart from that，且别提费用 apart from the cost。',
    },
}

entries['before'] = {
    'en': {
        'title': 'before (preposition): meaning (earlier than, in front of) + examples | Preposition Dino',
        'description': 'before means earlier than in time, or in front of in space. Examples: before noon, before the door.',
    },
    'zh-CN': {
        'title': 'before: meaning, time use, and examples | Preposition Dino',
        'description': 'before 表示在时间上更早，或在空间上在前。例句：中午之前 before noon，在门前 before the door。',
    },
}

entries['beneath'] = {
    'en': {
        'title': 'beneath (preposition): meaning (under, below) + examples | Preposition Dino',
        'description': 'beneath means under, at a lower position, often with a sense of being covered or hidden. Examples: beneath the surface, beneath the carpet.',
    },
    'zh-CN': {
        'title': 'beneath: meaning, place use, and examples | Preposition Dino',
        'description': 'beneath 表示在下面，处于较低位置，常有被覆盖或隐藏的感觉。例句：在表面下 beneath the surface，在地毯下 beneath the carpet。',
    },
}

entries['underneath'] = {
    'en': {
        'title': 'underneath (preposition): meaning (directly under, beneath) + examples | Preposition Dino',
        'description': 'underneath means directly under, with full coverage or concealment. Examples: underneath the table, underneath the paper.',
    },
    'zh-CN': {
        'title': 'underneath: meaning, place use, and examples | Preposition Dino',
        'description': 'underneath 表示在底下，完全覆盖或隐藏。例句：在桌子底下 underneath the table，在纸下面 underneath the paper。',
    },
}

# Filter to only keys not already in existing
to_add = {k: v for k, v in entries.items() if k not in existing}
print(f'Will add {len(to_add)} entries: {list(to_add.keys())}')

# Build TypeScript string
def ts_entry(key, val):
    # Check if key needs quoting (has hyphen)
    if '-' in key or ' ' in key:
        key_str = f'"{key}"'
    else:
        key_str = key

    en = val['en']
    zh = val['zh-CN']

    # Escape double quotes in strings for TypeScript
    def esc(s):
        return s.replace('\\', '\\\\').replace('"', '\\"')

    return f'''  {key_str}: {{
    en: {{
      title: "{esc(en['title'])}",
      description:
        "{esc(en['description'])}",
    }},
    "zh-CN": {{
      title: "{esc(zh['title'])}",
      description:
        "{esc(zh['description'])}",
    }},
  }},'''

all_entries = '\n'.join(ts_entry(k, v) for k, v in to_add.items())

old_closing = '  },\n};\n\nfunction getSeoCategories'
new_closing = f'''  }},
{all_entries}
}};\n\nfunction getSeoCategories'''

if old_closing not in content:
    print('ERROR: Pattern not found!')
    exit(1)

new_content = content.replace(old_closing, new_closing, 1)

with open('src/lib/prepositionSeo.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Done. Original: {len(content)} bytes, New: {len(new_content)} bytes, Added: {len(new_content) - len(content)} bytes')
