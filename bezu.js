function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var x = [
    66.021,
    84.884,
    97.011,
    103.75,
    109.14,
    107.79,
    113.18,
    118.57,
    122.61,
    130.69,
    133.39,
    136.08,
    137.43,
    130.69,
    126.65,
    122.61,
    121.26,
    118.57,
    115.87,
    114.53,
    111.83,
    109.14,
    107.79,
    103.75,
    101.05,
    97.011,
    95.663,
    92.968,
    92.968,
    92.968,
    92.968,
    90.274,
    86.232,
    79.495,
    78.147,
    78.147,
    79.495,
    79.495,
    75.453,
    72.758,
    72.758,
    70.063,
    67.368,
    61.979,
    59.284,
    59.284,
    56.589,
    53.895,
    53.895,
    53.895,
    55.242,
    55.242,
    56.589,
    57.937,
    57.937,
    60.632,
    63.326,
    66.021,
    70.063,
    72.758,
    75.453,
    80.842,
    84.884,
    88.926,
    94.316,
    98.358,
    102.4,
    107.79,
    111.83,
    118.57,
    123.96,
    129.35,
    136.08,
    144.17,
    152.25,
    160.34,
    165.73,
    173.81,
    179.2,
    187.28,
    194.02,
    198.06,
    204.8,
    208.84,
    211.54,
    218.27,
    227.71,
    231.75,
    239.83,
    243.87,
    250.61,
    254.65,
    262.74,
    265.43,
    270.82,
    276.21,
    280.25,
    284.29,
    288.34,
    292.38,
    299.12,
    304.51,
    305.85,
    311.24,
    313.94,
    320.67,
    320.67,
    326.06,
    328.76,
    332.8,
    334.15,
    335.49,
    340.88,
    340.88,
    340.88,
    340.88,
    340.88,
    336.84,
    336.84,
    335.49,
    335.49,
    335.49,
    338.19,
    342.23,
    342.23,
    342.23,
    342.23,
    342.23,
    340.88,
    339.54,
    338.19,
    335.49,
    331.45,
    327.41,
    322.02,
    324.72,
    328.76,
    331.45,
    335.49,
    339.54,
    343.58,
    346.27,
    350.32,
    354.36,
    358.4,
    365.14,
    370.53,
    375.92,
    385.35,
    390.74,
    401.52,
    408.25,
    419.03,
    423.07,
    432.51,
    437.89,
    444.63,
    452.72,
    456.76,
    460.8,
    466.19,
    470.23,
    475.62,
    475.62,
    475.62,
    471.58,
    474.27,
    470.23,
    474.27,
    478.32,
    483.71,
    490.44,
    494.48,
    501.22,
    507.96,
    510.65,
    322.02,
    316.63,
    312.59,
    308.55,
    305.85,
    305.85,
    303.16,
    300.46,
    297.77,
    295.07,
    289.68,
    282.95,
    278.91,
    269.47,
    260.04,
    242.53,
    225.01,
    208.84,
    192.67,
    173.81,
    160.34,
    154.95,
    148.21,
    140.13,
    137.43,
    123.96,
    114.53,
    105.09,
    98.358,
    92.968,
    91.621,
    95.663,
    101.05,
    109.14,
    115.87,
    119.92,
    125.31,
    130.69,
    133.39,
    128,
    121.26,
    113.18,
    106.44,
    99.705,
    95.663,
    92.968,
    91.621,
    80.842,
    84.884,
    92.968,
    99.705,
    107.79,
    114.53,
    119.92,
    125.31,
    119.92,
    114.53,
    110.48,
    105.09,
    97.011,
    91.621,
    84.884,
    80.842,
    79.495,
    79.495,
    79.495,
    97.011,
    111.83,
    123.96,
    133.39,
    136.08,
    137.43,
    137.43,
    138.78,
    137.43,
    137.43,
    138.78,
    136.08,
    133.39,
    130.69,
    130.69,
    132.04,
    134.74,
    138.78,
    142.82,
    146.86,
    149.56,
    153.6,
    156.29,
    161.68,
    169.77,
    173.81,
    181.89,
    185.94,
    187.28,
    184.59,
    180.55,
    176.51,
    173.81,
    171.12,
    173.81,
    176.51,
    180.55,
    189.98,
    199.41,
    208.84,
    215.58,
    225.01,
    230.4,
    229.05,
    227.71,
    220.97,
    214.23,
    206.15,
    196.72,
    184.59,
    177.85,
    175.16,
    163.03,
    154.95,
    152.25,
    153.6,
    161.68,
    172.46,
    180.55,
    189.98,
    198.06,
    206.15,
    218.27,
    227.71,
    235.79,
    241.18,
    234.44,
    225.01,
    215.58,
    206.15,
    196.72,
    189.98,
    176.51,
    165.73,
    160.34,
    153.6,
    172.46,
    171.12,
    175.16,
    181.89,
    185.94,
    180.55,
    165.73,
    168.42,
    158.99,
    154.95,
    148.21,
    144.17,
    141.47,
    142.82,
    144.17,
    146.86,
    149.56,
    152.25,
    156.29,
    161.68,
    164.38,
    168.42,
    173.81,
    177.85,
    181.89,
    187.28,
    191.33,
    198.06,
    202.11,
    206.15,
    211.54,
    214.23,
    214.23,
    208.84,
    200.76,
    192.67,
    184.59,
    177.85,
    169.77,
    165.73,
    156.29,
    141.47,
    142.82,
    144.17,
    66.021,
    71.411,
    78.147,
    87.579,
    97.011,
    105.09,
    114.53,
    119.92,
    113.18,
    109.14,
    103.75,
    99.705,
    95.663,
    92.968,
    91.621,
    90.274,
    80.842,
    72.758,
    72.758,
    79.495,
    80.842,
    78.147
];
var y=[
    335.52,
    324.63,
    319.18,
    315.91,
    318.09,
    311.56,
    309.38,
    303.93,
    299.57,
    294.13,
    289.77,
    287.59,
    286.5,
    282.14,
    278.88,
    273.43,
    270.16,
    267.98,
    262.54,
    257.09,
    252.73,
    248.37,
    241.84,
    233.12,
    224.41,
    216.78,
    211.34,
    206.98,
    200.44,
    193.91,
    192.82,
    188.46,
    184.1,
    178.66,
    173.21,
    167.76,
    161.23,
    156.87,
    151.42,
    147.06,
    144.89,
    140.53,
    137.26,
    133.99,
    131.81,
    126.37,
    125.28,
    125.28,
    120.92,
    116.56,
    111.11,
    107.85,
    103.49,
    100.22,
    95.864,
    90.417,
    84.97,
    80.613,
    76.255,
    70.809,
    66.451,
    61.004,
    56.647,
    53.379,
    49.021,
    44.664,
    39.217,
    35.949,
    30.502,
    27.234,
    23.966,
    19.609,
    16.34,
    15.251,
    11.983,
    9.8043,
    8.7149,
    8.7149,
    7.6255,
    7.6255,
    7.6255,
    7.6255,
    5.4468,
    4.3574,
    5.4468,
    5.4468,
    5.4468,
    8.7149,
    10.894,
    13.072,
    14.162,
    17.43,
    19.609,
    22.877,
    25.055,
    28.323,
    28.323,
    28.323,
    32.681,
    35.949,
    41.396,
    46.843,
    50.111,
    52.289,
    55.557,
    59.915,
    65.362,
    68.63,
    76.255,
    80.613,
    87.149,
    91.506,
    98.043,
    104.58,
    108.94,
    115.47,
    120.92,
    126.37,
    130.72,
    136.17,
    141.62,
    145.97,
    149.24,
    154.69,
    159.05,
    165.58,
    174.3,
    183.01,
    186.28,
    191.73,
    196.09,
    200.44,
    205.89,
    210.25,
    213.51,
    215.69,
    217.87,
    221.14,
    224.41,
    227.68,
    232.03,
    233.12,
    233.12,
    233.12,
    233.12,
    233.12,
    235.3,
    235.3,
    236.39,
    238.57,
    242.93,
    244.02,
    244.02,
    246.2,
    247.29,
    252.73,
    257.09,
    263.63,
    266.89,
    272.34,
    276.7,
    283.23,
    286.5,
    289.77,
    293.04,
    298.49,
    305.02,
    310.47,
    312.65,
    315.91,
    318.09,
    324.63,
    326.81,
    328.99,
    328.99,
    328.99,
    214.6,
    215.69,
    215.69,
    216.78,
    221.14,
    227.68,
    235.3,
    241.84,
    249.46,
    257.09,
    264.71,
    274.52,
    282.14,
    291.95,
    297.4,
    305.02,
    311.56,
    317,
    318.09,
    318.09,
    309.38,
    302.84,
    296.31,
    289.77,
    286.5,
    274.52,
    262.54,
    237.48,
    222.23,
    206.98,
    190.64,
    190.64,
    192.82,
    192.82,
    191.73,
    189.55,
    188.46,
    187.37,
    186.28,
    183.01,
    180.83,
    179.74,
    179.74,
    183.01,
    185.19,
    187.37,
    188.46,
    176.48,
    174.3,
    173.21,
    174.3,
    174.3,
    174.3,
    174.3,
    175.39,
    169.94,
    167.76,
    165.58,
    165.58,
    166.67,
    166.67,
    166.67,
    167.76,
    168.85,
    172.12,
    175.39,
    174.3,
    174.3,
    174.3,
    178.66,
    180.83,
    187.37,
    192.82,
    197.17,
    202.62,
    208.07,
    212.43,
    217.87,
    223.32,
    227.68,
    233.12,
    237.48,
    240.75,
    241.84,
    241.84,
    241.84,
    240.75,
    240.75,
    241.84,
    241.84,
    240.75,
    240.75,
    239.66,
    234.21,
    228.77,
    223.32,
    216.78,
    210.25,
    199.35,
    187.37,
    178.66,
    173.21,
    169.94,
    166.67,
    165.58,
    163.4,
    164.49,
    165.58,
    166.67,
    169.94,
    172.12,
    175.39,
    176.48,
    178.66,
    179.74,
    180.83,
    180.83,
    178.66,
    175.39,
    169.94,
    163.4,
    160.14,
    156.87,
    154.69,
    151.42,
    149.24,
    147.06,
    147.06,
    144.89,
    145.97,
    148.15,
    150.33,
    152.51,
    151.42,
    151.42,
    153.6,
    155.78,
    159.05,
    161.23,
    167.76,
    169.94,
    167.76,
    178.66,
    189.55,
    206.98,
    221.14,
    230.94,
    239.66,
    240.75,
    259.27,
    261.45,
    262.54,
    263.63,
    265.8,
    267.98,
    270.16,
    272.34,
    274.52,
    276.7,
    278.88,
    281.06,
    282.14,
    283.23,
    283.23,
    283.23,
    282.14,
    281.06,
    278.88,
    276.7,
    273.43,
    272.34,
    267.98,
    265.8,
    264.71,
    261.45,
    261.45,
    261.45,
    261.45,
    261.45,
    260.36,
    259.27,
    259.27,
    261.45,
    265.8,
    267.98,
    269.07,
    339.88,
    344.24,
    346.42,
    347.51,
    352.95,
    356.22,
    361.67,
    367.11,
    372.56,
    381.28,
    389.99,
    398.71,
    410.69,
    424.85,
    440.1,
    451,
    457.53,
    471.69,
    481.5,
    486.94,
    504.37,
    510.91
]

var canv2 = document.getElementById("C2");
var ctx2 = canv2.getContext('2d');

//ctx.moveTo(x[0],y[0]);
async function draw() {
    for(let i=1;i<x.length-2;i+=3)
    {
        await sleep(40);
        ctx2.beginPath();
        ctx2.moveTo(x[i-1],y[i-1]);
        //ctx2.lineTo(x[i],y[i]);
        ctx2.bezierCurveTo(x[i],y[i],x[i+1],y[i+1],x[i+2],y[i+2]);
        ctx2.closePath();
        ctx2.stroke();
    }
}
draw();

