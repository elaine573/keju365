{\rtf1\ansi\ansicpg936\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export default async function handler(req, res) \{\
  if (req.method !== 'POST') \{\
    return res.status(405).json(\{ error: 'Method not allowed' \});\
  \}\
  const \{ messages \} = req.body;\
  const response = await fetch('https://api.deepseek.com/v1/chat/completions', \{\
    method: 'POST',\
    headers: \{\
      'Content-Type': 'application/json',\
      'Authorization': `Bearer $\{process.env.DEEPSEEK_API_KEY\}`,\
    \},\
    body: JSON.stringify(\{\
      model: 'deepseek-chat',\
      messages: [\
        \{ role: 'system', content: '\uc0\u20320 \u26159 \u19968 \u20301 \u31934 \u36890 \u31185 \u20030 \u21382 \u21490 \u30340 \u32752 \u26519 \u23398 \u22763 \u12290 ' \},\
        ...messages,\
      ],\
      temperature: 0.7,\
    \}),\
  \});\
  const data = await response.json();\
  res.status(200).json(data);\
\}}