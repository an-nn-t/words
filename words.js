const wordList = [
    {
        "id": 1,
        "no": "001",
        "en": "begin",
        "ja": "始まる、始める",
        "section": "基礎の400 語",
        "audio": "001.mp3"
    },
    {
        "id": 1,
        "no": "001",
        "en": "according to",
        "ja": "～によると",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "001.mp3"
    },
    {
        "id": 1,
        "no": "001",
        "en": "face",
        "ja": "（～の方を）向く",
        "section": "Supplement2 パート1重要語50",
        "audio": "001.mp3"
    },
    {
        "id": 1,
        "no": "001",
        "en": "due to",
        "ja": "～が理由で",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "001.mp3"
    },
    {
        "id": 1,
        "no": "001",
        "en": "a couple of",
        "ja": "いくつかの、2・3 の",
        "section": "Supplement6 定型表現100",
        "audio": "001.mp3"
    },
    {
        "id": 2,
        "no": "002",
        "en": "work",
        "ja": "働く、作業する、うまくいく、仕事、作業、職場、作品",
        "section": "基礎の400 語",
        "audio": "002.mp3"
    },
    {
        "id": 2,
        "no": "002",
        "en": "advise",
        "ja": "勧める、忠告する、助言する",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "002.mp3"
    },
    {
        "id": 2,
        "no": "002",
        "en": "wear",
        "ja": "着用する、着る",
        "section": "Supplement2 パート1重要語50",
        "audio": "002.mp3"
    },
    {
        "id": 2,
        "no": "002",
        "en": "owing to",
        "ja": "～が理由で",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "002.mp3"
    },
    {
        "id": 2,
        "no": "002",
        "en": "a number of",
        "ja": "いくつかの",
        "section": "Supplement6 定型表現100",
        "audio": "002.mp3"
    },
    {
        "id": 3,
        "no": "003",
        "en": "company",
        "ja": "会社",
        "section": "基礎の400 語",
        "audio": "003.mp3"
    },
    {
        "id": 3,
        "no": "003",
        "en": "best belong",
        "ja": "一番うまく収まる",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "003.mp3"
    },
    {
        "id": 3,
        "no": "003",
        "en": "point",
        "ja": "指す、指差す",
        "section": "Supplement2 パート1重要語50",
        "audio": "003.mp3"
    },
    {
        "id": 3,
        "no": "003",
        "en": "despite",
        "ja": "～にもかかわらず",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "003.mp3"
    },
    {
        "id": 3,
        "no": "003",
        "en": "ahead of schedule",
        "ja": "予定より早く",
        "section": "Supplement6 定型表現100",
        "audio": "003.mp3"
    },
    {
        "id": 4,
        "no": "004",
        "en": "order",
        "ja": "注文、順番、注文する",
        "section": "基礎の400 語",
        "audio": "004.mp3"
    },
    {
        "id": 4,
        "no": "004",
        "en": "caller",
        "ja": "電話をかけている人",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "004.mp3"
    },
    {
        "id": 4,
        "no": "004",
        "en": "shelf",
        "ja": "棚",
        "section": "Supplement2 パート1重要語50",
        "audio": "004.mp3"
    },
    {
        "id": 4,
        "no": "004",
        "en": "in spite of",
        "ja": "～にもかかわらず",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "004.mp3"
    },
    {
        "id": 4,
        "no": "004",
        "en": "along with ",
        "ja": "～と一緒に",
        "section": "Supplement6 定型表現100",
        "audio": "004.mp3"
    },
    {
        "id": 5,
        "no": "005",
        "en": "employee",
        "ja": "社員、従業員",
        "section": "基礎の400 語",
        "audio": "005.mp3"
    },
    {
        "id": 5,
        "no": "005",
        "en": "concerned",
        "ja": "心配して",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "005.mp3"
    },
    {
        "id": 5,
        "no": "005",
        "en": "ladder",
        "ja": "ハシゴ",
        "section": "Supplement2 パート1重要語50",
        "audio": "005.mp3"
    },
    {
        "id": 5,
        "no": "005",
        "en": "in the event of",
        "ja": "～の場合",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "005.mp3"
    },
    {
        "id": 5,
        "no": "005",
        "en": "as a token of appreciation",
        "ja": "感謝の印として",
        "section": "Supplement6 定型表現100",
        "audio": "005.mp3"
    },
    {
        "id": 6,
        "no": "006",
        "en": "information",
        "ja": "情報",
        "section": "基礎の400 語",
        "audio": "006.mp3"
    },
    {
        "id": 6,
        "no": "006",
        "en": "conversation",
        "ja": "会話",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "006.mp3"
    },
    {
        "id": 6,
        "no": "006",
        "en": "examine",
        "ja": "詳しく見る、チェックする",
        "section": "Supplement2 パート1重要語50",
        "audio": "006.mp3"
    },
    {
        "id": 6,
        "no": "006",
        "en": "in addition to",
        "ja": "～に加えて",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "006.mp3"
    },
    {
        "id": 6,
        "no": "006",
        "en": "as of ",
        "ja": "～以降、～付で",
        "section": "Supplement6 定型表現100",
        "audio": "006.mp3"
    },
    {
        "id": 7,
        "no": "007",
        "en": "receive",
        "ja": "受け取る",
        "section": "基礎の400 語",
        "audio": "007.mp3"
    },
    {
        "id": 7,
        "no": "007",
        "en": "discuss",
        "ja": "話し合う",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "007.mp3"
    },
    {
        "id": 7,
        "no": "007",
        "en": "greet",
        "ja": "挨拶する",
        "section": "Supplement2 パート1重要語50",
        "audio": "007.mp3"
    },
    {
        "id": 7,
        "no": "007",
        "en": "besides",
        "ja": "～に加えて",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "007.mp3"
    },
    {
        "id": 7,
        "no": "007",
        "en": "as well",
        "ja": "～も",
        "section": "Supplement6 定型表現100",
        "audio": "007.mp3"
    },
    {
        "id": 8,
        "no": "008",
        "en": "last",
        "ja": "続く、この前の、最後の",
        "section": "基礎の400 語",
        "audio": "008.mp3"
    },
    {
        "id": 8,
        "no": "008",
        "en": "excerpt",
        "ja": "抜粋、引用",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "008.mp3"
    },
    {
        "id": 8,
        "no": "008",
        "en": "sweep",
        "ja": "（ほうきやブラシで）掃く",
        "section": "Supplement2 パート1重要語50",
        "audio": "008.mp3"
    },
    {
        "id": 8,
        "no": "008",
        "en": "except for",
        "ja": "～を除いて",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "008.mp3"
    },
    {
        "id": 8,
        "no": "008",
        "en": "as well as",
        "ja": "～に加えて",
        "section": "Supplement6 定型表現100",
        "audio": "008.mp3"
    },
    {
        "id": 9,
        "no": "009",
        "en": "need",
        "ja": "～を必要とする、～する必要がある、必要性、ニーズ",
        "section": "基礎の400 語",
        "audio": "009.mp3"
    },
    {
        "id": 9,
        "no": "009",
        "en": "graphic",
        "ja": "図表",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "009.mp3"
    },
    {
        "id": 9,
        "no": "009",
        "en": "adjust",
        "ja": "調節する、調整する",
        "section": "Supplement2 パート1重要語50",
        "audio": "009.mp3"
    },
    {
        "id": 9,
        "no": "009",
        "en": "regardless of",
        "ja": "～とは無関係に",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "009.mp3"
    },
    {
        "id": 9,
        "no": "009",
        "en": "at all times",
        "ja": "常時",
        "section": "Supplement6 定型表現100",
        "audio": "009.mp3"
    },
    {
        "id": 10,
        "no": "010",
        "en": "travel",
        "ja": "旅、出張、旅する、出張する",
        "section": "基礎の400 語",
        "audio": "010.mp3"
    },
    {
        "id": 10,
        "no": "010",
        "en": "imply",
        "ja": "ほのめかす、暗示する",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "010.mp3"
    },
    {
        "id": 10,
        "no": "010",
        "en": "head",
        "ja": "向かう",
        "section": "Supplement2 パート1重要語50",
        "audio": "010.mp3"
    },
    {
        "id": 10,
        "no": "010",
        "en": "instead of",
        "ja": "～の代わりに",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "010.mp3"
    },
    {
        "id": 10,
        "no": "010",
        "en": "at least",
        "ja": "少なくとも",
        "section": "Supplement6 定型表現100",
        "audio": "010.mp3"
    },
    {
        "id": 11,
        "no": "011",
        "en": "job",
        "ja": "仕事",
        "section": "基礎の400 語",
        "audio": "011.mp3"
    },
    {
        "id": 11,
        "no": "011",
        "en": "indicate",
        "ja": "示す、ほのめかす、示唆する",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "011.mp3"
    },
    {
        "id": 11,
        "no": "011",
        "en": "lean ",
        "ja": "寄り掛かる、もたれる",
        "section": "Supplement2 パート1重要語50",
        "audio": "011.mp3"
    },
    {
        "id": 11,
        "no": "011",
        "en": "during",
        "ja": "～の間",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "011.mp3"
    },
    {
        "id": 11,
        "no": "011",
        "en": "be about to do",
        "ja": "～しようとしている",
        "section": "Supplement6 定型表現100",
        "audio": "011.mp3"
    },
    {
        "id": 12,
        "no": "012",
        "en": "find",
        "ja": "見つける、思う",
        "section": "基礎の400 語",
        "audio": "012.mp3"
    },
    {
        "id": 12,
        "no": "012",
        "en": "intended",
        "ja": "意図された、向けられた",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "012.mp3"
    },
    {
        "id": 12,
        "no": "012",
        "en": "stool",
        "ja": "スツール（背もたれのない椅子）",
        "section": "Supplement2 パート1重要語50",
        "audio": "012.mp3"
    },
    {
        "id": 12,
        "no": "012",
        "en": "throughout",
        "ja": "～の至る所で、～中ずっと",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "012.mp3"
    },
    {
        "id": 12,
        "no": "012",
        "en": "be subject to",
        "ja": "～の可能性がある、～の対象となる",
        "section": "Supplement6 定型表現100",
        "audio": "012.mp3"
    },
    {
        "id": 13,
        "no": "013",
        "en": "department",
        "ja": "部、部署、売り場",
        "section": "基礎の400 語",
        "audio": "013.mp3"
    },
    {
        "id": 13,
        "no": "013",
        "en": "listener",
        "ja": "聞き手",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "013.mp3"
    },
    {
        "id": 13,
        "no": "013",
        "en": "brick",
        "ja": "レンガ",
        "section": "Supplement2 パート1重要語50",
        "audio": "013.mp3"
    },
    {
        "id": 13,
        "no": "013",
        "en": "without",
        "ja": "～なしに",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "013.mp3"
    },
    {
        "id": 13,
        "no": "013",
        "en": "be supposed to do",
        "ja": "～することになっている",
        "section": "Supplement6 定型表現100",
        "audio": "013.mp3"
    },
    {
        "id": 14,
        "no": "014",
        "en": "let",
        "ja": "～させる",
        "section": "基礎の400 語",
        "audio": "014.mp3"
    },
    {
        "id": 14,
        "no": "014",
        "en": "mainly",
        "ja": "主に",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "014.mp3"
    },
    {
        "id": 14,
        "no": "014",
        "en": "hang",
        "ja": "（絵などが）掛かる、～を掛ける",
        "section": "Supplement2 パート1重要語50",
        "audio": "014.mp3"
    },
    {
        "id": 14,
        "no": "014",
        "en": "when",
        "ja": "～する時",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "014.mp3"
    },
    {
        "id": 14,
        "no": "014",
        "en": "behind schedule",
        "ja": "予定より遅れて",
        "section": "Supplement6 定型表現100",
        "audio": "014.mp3"
    },
    {
        "id": 15,
        "no": "015",
        "en": "visit",
        "ja": "訪れる、訪問",
        "section": "基礎の400 語",
        "audio": "015.mp3"
    },
    {
        "id": 15,
        "no": "015",
        "en": "mean",
        "ja": "意味する",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "015.mp3"
    },
    {
        "id": 15,
        "no": "015",
        "en": "kneel",
        "ja": "ひざをつく",
        "section": "Supplement2 パート1重要語50",
        "audio": "015.mp3"
    },
    {
        "id": 15,
        "no": "015",
        "en": "while",
        "ja": "～する間、～だけれども",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "015.mp3"
    },
    {
        "id": 15,
        "no": "015",
        "en": "box office",
        "ja": "チケット売り場",
        "section": "Supplement6 定型表現100",
        "audio": "015.mp3"
    },
    {
        "id": 16,
        "no": "016",
        "en": "also",
        "ja": "～もまた",
        "section": "基礎の400 語",
        "audio": "016.mp3"
    },
    {
        "id": 16,
        "no": "016",
        "en": "meaning",
        "ja": "意味",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "016.mp3"
    },
    {
        "id": 16,
        "no": "016",
        "en": "walkway",
        "ja": "歩道",
        "section": "Supplement2 パート1重要語50",
        "audio": "016.mp3"
    },
    {
        "id": 16,
        "no": "016",
        "en": "because",
        "ja": "～なので",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "016.mp3"
    },
    {
        "id": 16,
        "no": "016",
        "en": "carry out",
        "ja": "実行する、遂行する",
        "section": "Supplement6 定型表現100",
        "audio": "016.mp3"
    },
    {
        "id": 17,
        "no": "017",
        "en": "sure",
        "ja": "確かな、もちろん、必ず",
        "section": "基礎の400 語",
        "audio": "017.mp3"
    },
    {
        "id": 17,
        "no": "017",
        "en": "mention",
        "ja": "述べる",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "017.mp3"
    },
    {
        "id": 17,
        "no": "017",
        "en": "water",
        "ja": "水をかける",
        "section": "Supplement2 パート1重要語50",
        "audio": "017.mp3"
    },
    {
        "id": 17,
        "no": "017",
        "en": "if",
        "ja": "もし～するなら、～するかどうか",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "017.mp3"
    },
    {
        "id": 17,
        "no": "017",
        "en": "come up with",
        "ja": "～を思いつく",
        "section": "Supplement6 定型表現100",
        "audio": "017.mp3"
    },
    {
        "id": 18,
        "no": "018",
        "en": "leave",
        "ja": "出発する、残す、辞める、～のままにする、休暇",
        "section": "基礎の400 語",
        "audio": "018.mp3"
    },
    {
        "id": 18,
        "no": "018",
        "en": "most likely",
        "ja": "おそらく",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "018.mp3"
    },
    {
        "id": 18,
        "no": "018",
        "en": "mount",
        "ja": "（上に）据える、固定する",
        "section": "Supplement2 パート1重要語50",
        "audio": "018.mp3"
    },
    {
        "id": 18,
        "no": "018",
        "en": "whenever",
        "ja": "～する時はいつでも",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "018.mp3"
    },
    {
        "id": 18,
        "no": "018",
        "en": "depend on",
        "ja": "～次第だ、～に頼る",
        "section": "Supplement6 定型表現100",
        "audio": "018.mp3"
    },
    {
        "id": 19,
        "no": "019",
        "en": "sales",
        "ja": "営業、売り上げ",
        "section": "基礎の400 語",
        "audio": "019.mp3"
    },
    {
        "id": 19,
        "no": "019",
        "en": "probably",
        "ja": "おそらく",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "019.mp3"
    },
    {
        "id": 19,
        "no": "019",
        "en": "place",
        "ja": "置く",
        "section": "Supplement2 パート1重要語50",
        "audio": "019.mp3"
    },
    {
        "id": 19,
        "no": "019",
        "en": "whether",
        "ja": "～であろうと、～かどうか",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "019.mp3"
    },
    {
        "id": 19,
        "no": "019",
        "en": "do a favor",
        "ja": "手を貸す、助ける",
        "section": "Supplement6 定型表現100",
        "audio": "019.mp3"
    },
    {
        "id": 20,
        "no": "020",
        "en": "move",
        "ja": "動かす、動く、引っ越す、動き、引っ越し",
        "section": "基礎の400 語",
        "audio": "020.mp3"
    },
    {
        "id": 20,
        "no": "020",
        "en": "purpose",
        "ja": "目的",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "020.mp3"
    },
    {
        "id": 20,
        "no": "020",
        "en": "cast",
        "ja": "（影を）伸ばす",
        "section": "Supplement2 パート1重要語50",
        "audio": "020.mp3"
    },
    {
        "id": 20,
        "no": "020",
        "en": "as soon as",
        "ja": "～するとすぐに",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "020.mp3"
    },
    {
        "id": 20,
        "no": "020",
        "en": "drop off",
        "ja": "預ける",
        "section": "Supplement6 定型表現100",
        "audio": "020.mp3"
    },
    {
        "id": 21,
        "no": "021",
        "en": "arrive",
        "ja": "到着する、届く",
        "section": "基礎の400 語",
        "audio": "021.mp3"
    },
    {
        "id": 21,
        "no": "021",
        "en": "reach",
        "ja": "手を伸ばす",
        "section": "Supplement2 パート1重要語50",
        "audio": "021.mp3"
    },
    {
        "id": 21,
        "no": "021",
        "en": "once",
        "ja": "いったん～したら",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "021.mp3"
    },
    {
        "id": 21,
        "no": "021",
        "en": "feel free to do",
        "ja": "お気軽に～してください",
        "section": "Supplement6 定型表現100",
        "audio": "021.mp3"
    },
    {
        "id": 22,
        "no": "022",
        "en": "hold",
        "ja": "（イベントを）行う、手に持つ",
        "section": "基礎の400 語",
        "audio": "022.mp3"
    },
    {
        "id": 22,
        "no": "022",
        "en": "climb",
        "ja": "上る",
        "section": "Supplement2 パート1重要語50",
        "audio": "022.mp3"
    },
    {
        "id": 22,
        "no": "022",
        "en": "unless",
        "ja": "～しない限り",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "022.mp3"
    },
    {
        "id": 22,
        "no": "022",
        "en": "fill out",
        "ja": "～に記入する",
        "section": "Supplement6 定型表現100",
        "audio": "022.mp3"
    },
    {
        "id": 23,
        "no": "023",
        "en": "return",
        "ja": "戻る、戻す、戻ること、戻すこと、戻りの",
        "section": "基礎の400 語",
        "audio": "023.mp3"
    },
    {
        "id": 23,
        "no": "023",
        "en": "pour",
        "ja": "注ぐ",
        "section": "Supplement2 パート1重要語50",
        "audio": "023.mp3"
    },
    {
        "id": 23,
        "no": "023",
        "en": "now that",
        "ja": "今はもう～なので",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "023.mp3"
    },
    {
        "id": 23,
        "no": "023",
        "en": "find out",
        "ja": "わかる、知る",
        "section": "Supplement6 定型表現100",
        "audio": "023.mp3"
    },
    {
        "id": 24,
        "no": "024",
        "en": "opening",
        "ja": "（店などの）オープン、仕事の空き、オープニングの",
        "section": "基礎の400 語",
        "audio": "024.mp3"
    },
    {
        "id": 24,
        "no": "024",
        "en": "load",
        "ja": "積み込む",
        "section": "Supplement2 パート1重要語50",
        "audio": "024.mp3"
    },
    {
        "id": 24,
        "no": "024",
        "en": "take place",
        "ja": "行われる、起こる",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "024.mp3"
    },
    {
        "id": 24,
        "no": "024",
        "en": "so that",
        "ja": "～するように",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "024.mp3"
    },
    {
        "id": 24,
        "no": "024",
        "en": "for example",
        "ja": "たとえば",
        "section": "Supplement6 定型表現100",
        "audio": "024.mp3"
    },
    {
        "id": 25,
        "no": "025",
        "en": "soon",
        "ja": "もうすぐ",
        "section": "基礎の400 語",
        "audio": "025.mp3"
    },
    {
        "id": 25,
        "no": "025",
        "en": "board",
        "ja": "乗り込む",
        "section": "Supplement2 パート1重要語50",
        "audio": "025.mp3"
    },
    {
        "id": 25,
        "no": "025",
        "en": "true",
        "ja": "本当の、正しい",
        "section": "Supplement1 設問に出る単語・表現",
        "audio": "025.mp3"
    },
    {
        "id": 25,
        "no": "025",
        "en": "in order that",
        "ja": "～するように",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "025.mp3"
    },
    {
        "id": 25,
        "no": "025",
        "en": "front desk",
        "ja": "受付",
        "section": "Supplement6 定型表現100",
        "audio": "025.mp3"
    },
    {
        "id": 26,
        "no": "026",
        "en": "sign",
        "ja": "署名する、標識、看板",
        "section": "基礎の400 語",
        "audio": "026.mp3"
    },
    {
        "id": 26,
        "no": "026",
        "en": "pot",
        "ja": "深鍋、植木鉢",
        "section": "Supplement2 パート1重要語50",
        "audio": "026.mp3"
    },
    {
        "id": 26,
        "no": "026",
        "en": "although",
        "ja": "～にもかかわらず",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "026.mp3"
    },
    {
        "id": 26,
        "no": "026",
        "en": "get in touch with",
        "ja": "～と連絡を取る",
        "section": "Supplement6 定型表現100",
        "audio": "026.mp3"
    },
    {
        "id": 27,
        "no": "027",
        "en": "able",
        "ja": "できる",
        "section": "基礎の400 語",
        "audio": "027.mp3"
    },
    {
        "id": 27,
        "no": "027",
        "en": "stack",
        "ja": "積み重ねる",
        "section": "Supplement2 パート1重要語50",
        "audio": "027.mp3"
    },
    {
        "id": 27,
        "no": "027",
        "en": "though",
        "ja": "～にもかかわらず",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "027.mp3"
    },
    {
        "id": 27,
        "no": "027",
        "en": "go ahead",
        "ja": "どうぞ、進める、進んで行う",
        "section": "Supplement6 定型表現100",
        "audio": "027.mp3"
    },
    {
        "id": 28,
        "no": "028",
        "en": "few",
        "ja": "少数の、少しの、少数",
        "section": "基礎の400 語",
        "audio": "028.mp3"
    },
    {
        "id": 28,
        "no": "028",
        "en": "drawer",
        "ja": "引き出し",
        "section": "Supplement2 パート1重要語50",
        "audio": "028.mp3"
    },
    {
        "id": 28,
        "no": "028",
        "en": "even though",
        "ja": "～にもかかわらず",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "028.mp3"
    },
    {
        "id": 28,
        "no": "028",
        "en": "go over",
        "ja": "～を詳しくチェックする",
        "section": "Supplement6 定型表現100",
        "audio": "028.mp3"
    },
    {
        "id": 29,
        "no": "029",
        "en": "pay",
        "ja": "支払う、給料",
        "section": "基礎の400 語",
        "audio": "029.mp3"
    },
    {
        "id": 29,
        "no": "029",
        "en": "instrument",
        "ja": "楽器",
        "section": "Supplement2 パート1重要語50",
        "audio": "029.mp3"
    },
    {
        "id": 29,
        "no": "029",
        "en": "even if",
        "ja": "たとえ～しても",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "029.mp3"
    },
    {
        "id": 29,
        "no": "029",
        "en": "grand opening",
        "ja": "グランドオープン、開店、開業",
        "section": "Supplement6 定型表現100",
        "audio": "029.mp3"
    },
    {
        "id": 30,
        "no": "030",
        "en": "trip",
        "ja": "出張、旅行",
        "section": "基礎の400 語",
        "audio": "030.mp3"
    },
    {
        "id": 30,
        "no": "030",
        "en": "railing",
        "ja": "手すり",
        "section": "Supplement2 パート1重要語50",
        "audio": "030.mp3"
    },
    {
        "id": 30,
        "no": "030",
        "en": "provided that",
        "ja": "～するという条件でのみ",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "030.mp3"
    },
    {
        "id": 30,
        "no": "030",
        "en": "How about 〜 ?",
        "ja": "～はどうですか",
        "section": "Supplement6 定型表現100",
        "audio": "030.mp3"
    },
    {
        "id": 31,
        "no": "031",
        "en": "sell",
        "ja": "売る、売れる",
        "section": "基礎の400 語",
        "audio": "031.mp3"
    },
    {
        "id": 31,
        "no": "031",
        "en": "position",
        "ja": "位置に置く、位置を合わせる",
        "section": "Supplement2 パート1重要語50",
        "audio": "031.mp3"
    },
    {
        "id": 31,
        "no": "031",
        "en": "as long as",
        "ja": "～する限り",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "031.mp3"
    },
    {
        "id": 31,
        "no": "031",
        "en": "I’m afraid",
        "ja": "残念ながら",
        "section": "Supplement6 定型表現100",
        "audio": "031.mp3"
    },
    {
        "id": 32,
        "no": "032",
        "en": "several",
        "ja": "いくつかの、数名の、数個、数名",
        "section": "基礎の400 語",
        "audio": "032.mp3"
    },
    {
        "id": 32,
        "no": "032",
        "en": "lay out",
        "ja": "広げる",
        "section": "Supplement2 パート1重要語50",
        "audio": "032.mp3"
    },
    {
        "id": 32,
        "no": "032",
        "en": "in case",
        "ja": "～するといけないので",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "032.mp3"
    },
    {
        "id": 32,
        "no": "032",
        "en": "in a row",
        "ja": "一列に、連続で",
        "section": "Supplement6 定型表現100",
        "audio": "032.mp3"
    },
    {
        "id": 33,
        "no": "033",
        "en": "hear",
        "ja": "聞く",
        "section": "基礎の400 語",
        "audio": "033.mp3"
    },
    {
        "id": 33,
        "no": "033",
        "en": "lead to",
        "ja": "（道等が）～に通じる、つながる",
        "section": "Supplement2 パート1重要語50",
        "audio": "033.mp3"
    },
    {
        "id": 33,
        "no": "033",
        "en": "given that",
        "ja": "～を考慮すると",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "033.mp3"
    },
    {
        "id": 33,
        "no": "033",
        "en": "in advance",
        "ja": "事前に",
        "section": "Supplement6 定型表現100",
        "audio": "033.mp3"
    },
    {
        "id": 34,
        "no": "034",
        "en": "still",
        "ja": "まだ、依然として、それでもなお",
        "section": "基礎の400 語",
        "audio": "034.mp3"
    },
    {
        "id": 34,
        "no": "034",
        "en": "lawn",
        "ja": "芝生",
        "section": "Supplement2 パート1重要語50",
        "audio": "034.mp3"
    },
    {
        "id": 34,
        "no": "034",
        "en": "in the event that",
        "ja": "～した場合",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "034.mp3"
    },
    {
        "id": 34,
        "no": "034",
        "en": "in charge of",
        "ja": "～を担当している",
        "section": "Supplement6 定型表現100",
        "audio": "034.mp3"
    },
    {
        "id": 35,
        "no": "035",
        "en": "later",
        "ja": "あとで、あとの",
        "section": "基礎の400 語",
        "audio": "035.mp3"
    },
    {
        "id": 35,
        "no": "035",
        "en": "fountain",
        "ja": "噴水、泉",
        "section": "Supplement2 パート1重要語50",
        "audio": "035.mp3"
    },
    {
        "id": 35,
        "no": "035",
        "en": "since",
        "ja": "～以来、～して以来、～なので",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "035.mp3"
    },
    {
        "id": 35,
        "no": "035",
        "en": "in fact",
        "ja": "実際は、実は",
        "section": "Supplement6 定型表現100",
        "audio": "035.mp3"
    },
    {
        "id": 36,
        "no": "036",
        "en": "different",
        "ja": "異なる、違う",
        "section": "基礎の400 語",
        "audio": "036.mp3"
    },
    {
        "id": 36,
        "no": "036",
        "en": "platform",
        "ja": "台、（駅の）ホーム",
        "section": "Supplement2 パート1重要語50",
        "audio": "036.mp3"
    },
    {
        "id": 36,
        "no": "036",
        "en": "until",
        "ja": "～までずっと、～するまでずっと",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "036.mp3"
    },
    {
        "id": 36,
        "no": "036",
        "en": "in person",
        "ja": "直接会って",
        "section": "Supplement6 定型表現100",
        "audio": "036.mp3"
    },
    {
        "id": 37,
        "no": "037",
        "en": "close",
        "ja": "近い、閉める、閉まる",
        "section": "基礎の400 語",
        "audio": "037.mp3"
    },
    {
        "id": 37,
        "no": "037",
        "en": "dock",
        "ja": "波止場、埠頭（ふとう）",
        "section": "Supplement2 パート1重要語50",
        "audio": "037.mp3"
    },
    {
        "id": 37,
        "no": "037",
        "en": "before",
        "ja": "～の前に、～する前に",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "037.mp3"
    },
    {
        "id": 37,
        "no": "037",
        "en": "in short",
        "ja": "要するに",
        "section": "Supplement6 定型表現100",
        "audio": "037.mp3"
    },
    {
        "id": 38,
        "no": "038",
        "en": "stay",
        "ja": "滞在する、とどまる、～のままでいる、滞在",
        "section": "基礎の400 語",
        "audio": "038.mp3"
    },
    {
        "id": 38,
        "no": "038",
        "en": "exit",
        "ja": "（場所から）出る",
        "section": "Supplement2 パート1重要語50",
        "audio": "038.mp3"
    },
    {
        "id": 38,
        "no": "038",
        "en": "after",
        "ja": "～の後で、～した後で",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "038.mp3"
    },
    {
        "id": 38,
        "no": "038",
        "en": "in the long run",
        "ja": "長期的には",
        "section": "Supplement6 定型表現100",
        "audio": "038.mp3"
    },
    {
        "id": 39,
        "no": "039",
        "en": "already",
        "ja": "すでに",
        "section": "基礎の400 語",
        "audio": "039.mp3"
    },
    {
        "id": 39,
        "no": "039",
        "en": "workstation",
        "ja": "仕事場、作業場",
        "section": "Supplement2 パート1重要語50",
        "audio": "039.mp3"
    },
    {
        "id": 39,
        "no": "039",
        "en": "therefore",
        "ja": "したがって",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "039.mp3"
    },
    {
        "id": 39,
        "no": "039",
        "en": "in the meantime",
        "ja": "その間、それまでの間",
        "section": "Supplement6 定型表現100",
        "audio": "039.mp3"
    },
    {
        "id": 40,
        "no": "040",
        "en": "present",
        "ja": "与える、示す、プレゼント、現在、現在の、その場にいる",
        "section": "基礎の400 語",
        "audio": "040.mp3"
    },
    {
        "id": 40,
        "no": "040",
        "en": "curb",
        "ja": "縁石（歩道と車道の間にある石の段差）",
        "section": "Supplement2 パート1重要語50",
        "audio": "040.mp3"
    },
    {
        "id": 40,
        "no": "040",
        "en": "however",
        "ja": "しかしながら",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "040.mp3"
    },
    {
        "id": 40,
        "no": "040",
        "en": "in time for",
        "ja": "～に間に合って",
        "section": "Supplement6 定型表現100",
        "audio": "040.mp3"
    },
    {
        "id": 41,
        "no": "041",
        "en": "factory",
        "ja": "工場",
        "section": "基礎の400 語",
        "audio": "041.mp3"
    },
    {
        "id": 41,
        "no": "041",
        "en": "staircase",
        "ja": "（室内にある手すりのついた）階段",
        "section": "Supplement2 パート1重要語50",
        "audio": "041.mp3"
    },
    {
        "id": 41,
        "no": "041",
        "en": "nevertheless",
        "ja": "それにもかかわらず",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "041.mp3"
    },
    {
        "id": 41,
        "no": "041",
        "en": "in writing",
        "ja": "書面で",
        "section": "Supplement6 定型表現100",
        "audio": "041.mp3"
    },
    {
        "id": 42,
        "no": "042",
        "en": "interested",
        "ja": "興味がある",
        "section": "基礎の400 語",
        "audio": "042.mp3"
    },
    {
        "id": 42,
        "no": "042",
        "en": "spectator",
        "ja": "（スポーツ等の）観客、見物客",
        "section": "Supplement2 パート1重要語50",
        "audio": "042.mp3"
    },
    {
        "id": 42,
        "no": "042",
        "en": "moreover",
        "ja": "その上",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "042.mp3"
    },
    {
        "id": 42,
        "no": "042",
        "en": "instead of",
        "ja": "～の代わりに、～ではなく",
        "section": "Supplement6 定型表現100",
        "audio": "042.mp3"
    },
    {
        "id": 43,
        "no": "043",
        "en": "cover",
        "ja": "覆う、報道する、含む、扱う、カバー、表紙",
        "section": "基礎の400 語",
        "audio": "043.mp3"
    },
    {
        "id": 43,
        "no": "043",
        "en": "cookware",
        "ja": "（鍋、フライパン等の）調理器具",
        "section": "Supplement2 パート1重要語50",
        "audio": "043.mp3"
    },
    {
        "id": 43,
        "no": "043",
        "en": "furthermore",
        "ja": "さらに",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "043.mp3"
    },
    {
        "id": 43,
        "no": "043",
        "en": "job fair",
        "ja": "就職説明会",
        "section": "Supplement6 定型表現100",
        "audio": "043.mp3"
    },
    {
        "id": 44,
        "no": "044",
        "en": "choose",
        "ja": "選ぶ",
        "section": "基礎の400 語",
        "audio": "044.mp3"
    },
    {
        "id": 44,
        "no": "044",
        "en": "overlook",
        "ja": "見下ろす位置にある",
        "section": "Supplement2 パート1重要語50",
        "audio": "044.mp3"
    },
    {
        "id": 44,
        "no": "044",
        "en": "consequently",
        "ja": "結果として",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "044.mp3"
    },
    {
        "id": 44,
        "no": "044",
        "en": "keep in mind",
        "ja": "念頭に置く",
        "section": "Supplement6 定型表現100",
        "audio": "044.mp3"
    },
    {
        "id": 45,
        "no": "045",
        "en": "apartment",
        "ja": "アパート、マンション",
        "section": "基礎の400 語",
        "audio": "045.mp3"
    },
    {
        "id": 45,
        "no": "045",
        "en": "pedestrian",
        "ja": "歩行者",
        "section": "Supplement2 パート1重要語50",
        "audio": "045.mp3"
    },
    {
        "id": 45,
        "no": "045",
        "en": "meanwhile",
        "ja": "その間",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "045.mp3"
    },
    {
        "id": 45,
        "no": "045",
        "en": "keep up with",
        "ja": "～に付いていく",
        "section": "Supplement6 定型表現100",
        "audio": "045.mp3"
    },
    {
        "id": 46,
        "no": "046",
        "en": "paper",
        "ja": "書類、紙",
        "section": "基礎の400 語",
        "audio": "046.mp3"
    },
    {
        "id": 46,
        "no": "046",
        "en": "occupied",
        "ja": "（部屋、座席、ベッド等が）使われている",
        "section": "Supplement2 パート1重要語50",
        "audio": "046.mp3"
    },
    {
        "id": 46,
        "no": "046",
        "en": "accordingly",
        "ja": "結果として、それに応じて",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "046.mp3"
    },
    {
        "id": 46,
        "no": "046",
        "en": "look for",
        "ja": "～を探す",
        "section": "Supplement6 定型表現100",
        "audio": "046.mp3"
    },
    {
        "id": 47,
        "no": "047",
        "en": "note",
        "ja": "注意する、述べる、メモ、注記",
        "section": "基礎の400 語",
        "audio": "047.mp3"
    },
    {
        "id": 47,
        "no": "047",
        "en": "stroll",
        "ja": "ぶらぶら歩く",
        "section": "Supplement2 パート1重要語50",
        "audio": "047.mp3"
    },
    {
        "id": 47,
        "no": "047",
        "en": "in addition",
        "ja": "加えて",
        "section": "Supplement4 前置詞・接続詞・接続副詞",
        "audio": "047.mp3"
    },
    {
        "id": 47,
        "no": "047",
        "en": "look forward to",
        "ja": "～を楽しみにしている",
        "section": "Supplement6 定型表現100",
        "audio": "047.mp3"
    },
    {
        "id": 48,
        "no": "048",
        "en": "both",
        "ja": "両方とも、両方の、両方、両方ともに",
        "section": "基礎の400 語",
        "audio": "048.mp3"
    },
    {
        "id": 48,
        "no": "048",
        "en": "rest",
        "ja": "（体の部分を）休ませる、休む",
        "section": "Supplement2 パート1重要語50",
        "audio": "048.mp3"
    },
    {
        "id": 48,
        "no": "048",
        "en": "look no further than",
        "ja": "～以外を見る必要はない",
        "section": "Supplement6 定型表現100",
        "audio": "048.mp3"
    },
    {
        "id": 49,
        "no": "049",
        "en": "either",
        "ja": "どちらか、どちらかの、どちらも、～もない",
        "section": "基礎の400 語",
        "audio": "049.mp3"
    },
    {
        "id": 49,
        "no": "049",
        "en": "rug",
        "ja": "（部分敷きの）カーペット",
        "section": "Supplement2 パート1重要語50",
        "audio": "049.mp3"
    },
    {
        "id": 49,
        "no": "049",
        "en": "look over",
        "ja": "～にざっと目を通す",
        "section": "Supplement6 定型表現100",
        "audio": "049.mp3"
    },
    {
        "id": 50,
        "no": "050",
        "en": "neither",
        "ja": "どちらも～ない",
        "section": "基礎の400 語",
        "audio": "050.mp3"
    },
    {
        "id": 50,
        "no": "050",
        "en": "browse",
        "ja": "(店内を)見て回る、(本・雑誌などを)ざっと読む",
        "section": "Supplement2 パート1重要語50",
        "audio": "050.mp3"
    },
    {
        "id": 50,
        "no": "050",
        "en": "look to do",
        "ja": "～しようとする",
        "section": "Supplement6 定型表現100",
        "audio": "050.mp3"
    },
    {
        "id": 51,
        "no": "051",
        "en": "ago",
        "ja": "前に",
        "section": "基礎の400 語",
        "audio": "051.mp3"
    },
    {
        "id": 51,
        "no": "051",
        "en": "look up",
        "ja": "調べる",
        "section": "Supplement6 定型表現100",
        "audio": "051.mp3"
    },
    {
        "id": 52,
        "no": "052",
        "en": "finish",
        "ja": "終える、終わる",
        "section": "基礎の400 語",
        "audio": "052.mp3"
    },
    {
        "id": 52,
        "no": "052",
        "en": "lost and found",
        "ja": "遺失物取扱所",
        "section": "Supplement6 定型表現100",
        "audio": "052.mp3"
    },
    {
        "id": 53,
        "no": "053",
        "en": "hope",
        "ja": "願う、望む、期待する、希望",
        "section": "基礎の400 語",
        "audio": "053.mp3"
    },
    {
        "id": 53,
        "no": "053",
        "en": "make room for",
        "ja": "～のためにスペースを空ける",
        "section": "Supplement6 定型表現100",
        "audio": "053.mp3"
    },
    {
        "id": 54,
        "no": "054",
        "en": "part",
        "ja": "一部、部分、部品",
        "section": "基礎の400 語",
        "audio": "054.mp3"
    },
    {
        "id": 54,
        "no": "054",
        "en": "make sense",
        "ja": "もっともだ",
        "section": "Supplement6 定型表現100",
        "audio": "054.mp3"
    },
    {
        "id": 55,
        "no": "055",
        "en": "important",
        "ja": "重要な",
        "section": "基礎の400 語",
        "audio": "055.mp3"
    },
    {
        "id": 55,
        "no": "055",
        "en": "make sure",
        "ja": "確実に～する、確かめる",
        "section": "Supplement6 定型表現100",
        "audio": "055.mp3"
    },
    {
        "id": 56,
        "no": "056",
        "en": "mail",
        "ja": "郵送する、郵便物、郵便配達",
        "section": "基礎の400 語",
        "audio": "056.mp3"
    },
    {
        "id": 56,
        "no": "056",
        "en": "no doubt",
        "ja": "間違いない、当然だ",
        "section": "Supplement6 定型表現100",
        "audio": "056.mp3"
    },
    {
        "id": 57,
        "no": "057",
        "en": "once",
        "ja": "一度、かつて、いったん～したらすぐに",
        "section": "基礎の400 語",
        "audio": "057.mp3"
    },
    {
        "id": 57,
        "no": "057",
        "en": "no later than",
        "ja": "遅くとも",
        "section": "Supplement6 定型表現100",
        "audio": "057.mp3"
    },
    {
        "id": 58,
        "no": "058",
        "en": "run",
        "ja": "続く、運営する、作動させる、走る",
        "section": "基礎の400 語",
        "audio": "058.mp3"
    },
    {
        "id": 58,
        "no": "058",
        "en": "no longer",
        "ja": "もはや～ない",
        "section": "Supplement6 定型表現100",
        "audio": "058.mp3"
    },
    {
        "id": 59,
        "no": "059",
        "en": "bring",
        "ja": "持ってくる、連れてくる、連れて行く",
        "section": "基礎の400 語",
        "audio": "059.mp3"
    },
    {
        "id": 59,
        "no": "059",
        "en": "on a budget",
        "ja": "限られた予算内で",
        "section": "Supplement6 定型表現100",
        "audio": "059.mp3"
    },
    {
        "id": 60,
        "no": "060",
        "en": "place",
        "ja": "（注文や広告などを）出す、置く、場所",
        "section": "基礎の400 語",
        "audio": "060.mp3"
    },
    {
        "id": 60,
        "no": "060",
        "en": "on a first-come, first-served basis",
        "ja": "先着順で",
        "section": "Supplement6 定型表現100",
        "audio": "060.mp3"
    },
    {
        "id": 61,
        "no": "061",
        "en": "become",
        "ja": "～になる",
        "section": "基礎の400 語",
        "audio": "061.mp3"
    },
    {
        "id": 61,
        "no": "061",
        "en": "on behalf of",
        "ja": "～を代表して、～に成り代わって",
        "section": "Supplement6 定型表現100",
        "audio": "061.mp3"
    },
    {
        "id": 62,
        "no": "062",
        "en": "ready",
        "ja": "準備ができて",
        "section": "基礎の400 語",
        "audio": "062.mp3"
    },
    {
        "id": 62,
        "no": "062",
        "en": "on one’s way to",
        "ja": "～への途中で",
        "section": "Supplement6 定型表現100",
        "audio": "062.mp3"
    },
    {
        "id": 63,
        "no": "063",
        "en": "closed",
        "ja": "閉まっている",
        "section": "基礎の400 語",
        "audio": "063.mp3"
    },
    {
        "id": 63,
        "no": "063",
        "en": "on time",
        "ja": "時間通りに",
        "section": "Supplement6 定型表現100",
        "audio": "063.mp3"
    },
    {
        "id": 64,
        "no": "064",
        "en": "enter",
        "ja": "入る、入力する、エントリーする",
        "section": "基礎の400 語",
        "audio": "064.mp3"
    },
    {
        "id": 64,
        "no": "064",
        "en": "open to the public",
        "ja": "一般公開されている",
        "section": "Supplement6 定型表現100",
        "audio": "064.mp3"
    },
    {
        "id": 65,
        "no": "065",
        "en": "happen",
        "ja": "起こる",
        "section": "基礎の400 語",
        "audio": "065.mp3"
    },
    {
        "id": 65,
        "no": "065",
        "en": "out of order",
        "ja": "故障中",
        "section": "Supplement6 定型表現100",
        "audio": "065.mp3"
    },
    {
        "id": 66,
        "no": "066",
        "en": "customer",
        "ja": "顧客",
        "section": "基礎の400 語",
        "audio": "066.mp3"
    },
    {
        "id": 66,
        "no": "066",
        "en": "out of paper",
        "ja": "紙が切れている",
        "section": "Supplement6 定型表現100",
        "audio": "066.mp3"
    },
    {
        "id": 67,
        "no": "067",
        "en": "past",
        "ja": "過去の、過去、～を過ぎて",
        "section": "基礎の400 語",
        "audio": "067.mp3"
    },
    {
        "id": 67,
        "no": "067",
        "en": "out of stock",
        "ja": "在庫切れ",
        "section": "Supplement6 定型表現100",
        "audio": "067.mp3"
    },
    {
        "id": 68,
        "no": "068",
        "en": "same",
        "ja": "同じ、同じもの（人）",
        "section": "基礎の400 語",
        "audio": "068.mp3"
    },
    {
        "id": 68,
        "no": "068",
        "en": "out of town",
        "ja": "出張中で",
        "section": "Supplement6 定型表現100",
        "audio": "068.mp3"
    },
    {
        "id": 69,
        "no": "069",
        "en": "early",
        "ja": "早く、早い",
        "section": "基礎の400 語",
        "audio": "069.mp3"
    },
    {
        "id": 69,
        "no": "069",
        "en": "parking lot",
        "ja": "駐車場",
        "section": "Supplement6 定型表現100",
        "audio": "069.mp3"
    },
    {
        "id": 70,
        "no": "070",
        "en": "join",
        "ja": "加わる、参加する",
        "section": "基礎の400 語",
        "audio": "070.mp3"
    },
    {
        "id": 70,
        "no": "070",
        "en": "pay off",
        "ja": "(努力等が）実を結ぶ、完済する",
        "section": "Supplement6 定型表現100",
        "audio": "070.mp3"
    },
    {
        "id": 71,
        "no": "071",
        "en": "decide",
        "ja": "決める",
        "section": "基礎の400 語",
        "audio": "071.mp3"
    },
    {
        "id": 71,
        "no": "071",
        "en": "pick up",
        "ja": "受け取る、拾い上げる、車で拾う",
        "section": "Supplement6 定型表現100",
        "audio": "071.mp3"
    },
    {
        "id": 72,
        "no": "072",
        "en": "plant",
        "ja": "植物、工場、植える",
        "section": "基礎の400 語",
        "audio": "072.mp3"
    },
    {
        "id": 72,
        "no": "072",
        "en": "plenty of",
        "ja": "たくさんの、十分な",
        "section": "Supplement6 定型表現100",
        "audio": "072.mp3"
    },
    {
        "id": 73,
        "no": "073",
        "en": "pleased",
        "ja": "喜んで、満足して",
        "section": "基礎の400 語",
        "audio": "073.mp3"
    },
    {
        "id": 73,
        "no": "073",
        "en": "quite a few",
        "ja": "かなりの数の",
        "section": "Supplement6 定型表現100",
        "audio": "073.mp3"
    },
    {
        "id": 74,
        "no": "074",
        "en": "enough",
        "ja": "十分に、十分な、十分",
        "section": "基礎の400 語",
        "audio": "074.mp3"
    },
    {
        "id": 74,
        "no": "074",
        "en": "right away",
        "ja": "ただちに",
        "section": "Supplement6 定型表現100",
        "audio": "074.mp3"
    },
    {
        "id": 75,
        "no": "075",
        "en": "film",
        "ja": "映画、映画を撮影する",
        "section": "基礎の400 語",
        "audio": "075.mp3"
    },
    {
        "id": 75,
        "no": "075",
        "en": "right now",
        "ja": "ちょうど今、今すぐに",
        "section": "Supplement6 定型表現100",
        "audio": "075.mp3"
    },
    {
        "id": 76,
        "no": "076",
        "en": "case",
        "ja": "場合、ケース",
        "section": "基礎の400 語",
        "audio": "076.mp3"
    },
    {
        "id": 76,
        "no": "076",
        "en": "round-trip",
        "ja": "往復の",
        "section": "Supplement6 定型表現100",
        "audio": "076.mp3"
    },
    {
        "id": 77,
        "no": "077",
        "en": "meal",
        "ja": "食事",
        "section": "基礎の400 語",
        "audio": "077.mp3"
    },
    {
        "id": 77,
        "no": "077",
        "en": "run into",
        "ja": "～と出くわす",
        "section": "Supplement6 定型表現100",
        "audio": "077.mp3"
    },
    {
        "id": 78,
        "no": "078",
        "en": "someone",
        "ja": "誰か",
        "section": "基礎の400 語",
        "audio": "078.mp3"
    },
    {
        "id": 78,
        "no": "078",
        "en": "run out",
        "ja": "使い切る",
        "section": "Supplement6 定型表現100",
        "audio": "078.mp3"
    },
    {
        "id": 79,
        "no": "079",
        "en": "always",
        "ja": "いつも",
        "section": "基礎の400 語",
        "audio": "079.mp3"
    },
    {
        "id": 79,
        "no": "079",
        "en": "set aside",
        "ja": "～を取っておく",
        "section": "Supplement6 定型表現100",
        "audio": "079.mp3"
    },
    {
        "id": 80,
        "no": "080",
        "en": "piece",
        "ja": "1個、1つ、作品、記事",
        "section": "基礎の400 語",
        "audio": "080.mp3"
    },
    {
        "id": 80,
        "no": "080",
        "en": "sign up for",
        "ja": "～に登録する、申し込む",
        "section": "Supplement6 定型表現100",
        "audio": "080.mp3"
    },
    {
        "id": 81,
        "no": "081",
        "en": "carry",
        "ja": "持ち運ぶ、携行する、（商品を）扱う",
        "section": "基礎の400 語",
        "audio": "081.mp3"
    },
    {
        "id": 81,
        "no": "081",
        "en": "stop by",
        "ja": "～に立ち寄る",
        "section": "Supplement6 定型表現100",
        "audio": "081.mp3"
    },
    {
        "id": 82,
        "no": "082",
        "en": "ship",
        "ja": "出荷する、船",
        "section": "基礎の400 語",
        "audio": "082.mp3"
    },
    {
        "id": 82,
        "no": "082",
        "en": "stuck in traffic",
        "ja": "渋滞にはまって",
        "section": "Supplement6 定型表現100",
        "audio": "082.mp3"
    },
    {
        "id": 83,
        "no": "083",
        "en": "reach",
        "ja": "連絡を取る、情報を伝える、達する",
        "section": "基礎の400 語",
        "audio": "083.mp3"
    },
    {
        "id": 83,
        "no": "083",
        "en": "take a moment",
        "ja": "少し時間を取る",
        "section": "Supplement6 定型表現100",
        "audio": "083.mp3"
    },
    {
        "id": 84,
        "no": "084",
        "en": "remember",
        "ja": "覚えている、思い出す、忘れずに～する",
        "section": "基礎の400 語",
        "audio": "084.mp3"
    },
    {
        "id": 84,
        "no": "084",
        "en": "take advantage of",
        "ja": "～を利用する",
        "section": "Supplement6 定型表現100",
        "audio": "084.mp3"
    },
    {
        "id": 85,
        "no": "085",
        "en": "field",
        "ja": "分野、野原",
        "section": "基礎の400 語",
        "audio": "085.mp3"
    },
    {
        "id": 85,
        "no": "085",
        "en": "take care of",
        "ja": "～の世話をする、～に対応する",
        "section": "Supplement6 定型表現100",
        "audio": "085.mp3"
    },
    {
        "id": 86,
        "no": "086",
        "en": "dish",
        "ja": "料理、皿",
        "section": "基礎の400 語",
        "audio": "086.mp3"
    },
    {
        "id": 86,
        "no": "086",
        "en": "take effect",
        "ja": "有効になる",
        "section": "Supplement6 定型表現100",
        "audio": "086.mp3"
    },
    {
        "id": 87,
        "no": "087",
        "en": "post",
        "ja": "掲示する、投稿する、郵便（物）、柱",
        "section": "基礎の400 語",
        "audio": "087.mp3"
    },
    {
        "id": 87,
        "no": "087",
        "en": "take over",
        "ja": "～を引き継ぐ、乗っ取る",
        "section": "Supplement6 定型表現100",
        "audio": "087.mp3"
    },
    {
        "id": 88,
        "no": "088",
        "en": "sound",
        "ja": "（見聞きして）～のように思える、音",
        "section": "基礎の400 語",
        "audio": "088.mp3"
    },
    {
        "id": 88,
        "no": "088",
        "en": "thanks to",
        "ja": "～のおかげで",
        "section": "Supplement6 定型表現100",
        "audio": "088.mp3"
    },
    {
        "id": 89,
        "no": "089",
        "en": "break",
        "ja": "休憩、壊す、壊れる",
        "section": "基礎の400 語",
        "audio": "089.mp3"
    },
    {
        "id": 89,
        "no": "089",
        "en": "trade show",
        "ja": "見本市",
        "section": "Supplement6 定型表現100",
        "audio": "089.mp3"
    },
    {
        "id": 90,
        "no": "090",
        "en": "seem",
        "ja": "～のように思える",
        "section": "基礎の400 語",
        "audio": "090.mp3"
    },
    {
        "id": 90,
        "no": "090",
        "en": "turn off",
        "ja": "～の電源を切る、～を消す、止める",
        "section": "Supplement6 定型表現100",
        "audio": "090.mp3"
    },
    {
        "id": 91,
        "no": "091",
        "en": "build",
        "ja": "建てる、築く",
        "section": "基礎の400 語",
        "audio": "091.mp3"
    },
    {
        "id": 91,
        "no": "091",
        "en": "turn on",
        "ja": "～の電源を入れる、～を出す",
        "section": "Supplement6 定型表現100",
        "audio": "091.mp3"
    },
    {
        "id": 92,
        "no": "092",
        "en": "necessary",
        "ja": "必要な",
        "section": "基礎の400 語",
        "audio": "092.mp3"
    },
    {
        "id": 92,
        "no": "092",
        "en": "unless otherwise noted",
        "ja": "特に断りがない限り",
        "section": "Supplement6 定型表現100",
        "audio": "092.mp3"
    },
    {
        "id": 93,
        "no": "093",
        "en": "believe",
        "ja": "信じる、きっと～だと思う",
        "section": "基礎の400 語",
        "audio": "093.mp3"
    },
    {
        "id": 93,
        "no": "093",
        "en": "until further notice",
        "ja": "別途通知があるまでの間",
        "section": "Supplement6 定型表現100",
        "audio": "093.mp3"
    },
    {
        "id": 94,
        "no": "094",
        "en": "grow",
        "ja": "成長する、伸びる、育てる",
        "section": "基礎の400 語",
        "audio": "094.mp3"
    },
    {
        "id": 94,
        "no": "094",
        "en": "up to",
        "ja": "最大",
        "section": "Supplement6 定型表現100",
        "audio": "094.mp3"
    },
    {
        "id": 95,
        "no": "095",
        "en": "though",
        "ja": "だけど、～にもかかわらず",
        "section": "基礎の400 語",
        "audio": "095.mp3"
    },
    {
        "id": 95,
        "no": "095",
        "en": "used to do",
        "ja": "以前～していた",
        "section": "Supplement6 定型表現100",
        "audio": "095.mp3"
    },
    {
        "id": 96,
        "no": "096",
        "en": "kind",
        "ja": "種類、親切な",
        "section": "基礎の400 語",
        "audio": "096.mp3"
    },
    {
        "id": 96,
        "no": "096",
        "en": "when it comes to",
        "ja": "～に関して言えば",
        "section": "Supplement6 定型表現100",
        "audio": "096.mp3"
    },
    {
        "id": 97,
        "no": "097",
        "en": "miss",
        "ja": "逃す、いなくてさびしく思う",
        "section": "基礎の400 語",
        "audio": "097.mp3"
    },
    {
        "id": 97,
        "no": "097",
        "en": "within walking distance",
        "ja": "徒歩圏内",
        "section": "Supplement6 定型表現100",
        "audio": "097.mp3"
    },
    {
        "id": 98,
        "no": "098",
        "en": "spend",
        "ja": "（お金や時間を）使う、費やす、（時間を）過ごす",
        "section": "基礎の400 語",
        "audio": "098.mp3"
    },
    {
        "id": 98,
        "no": "098",
        "en": "wonder if",
        "ja": "～していただけないでしょうか",
        "section": "Supplement6 定型表現100",
        "audio": "098.mp3"
    },
    {
        "id": 99,
        "no": "099",
        "en": "busy",
        "ja": "忙しい、混んでいる",
        "section": "基礎の400 語",
        "audio": "099.mp3"
    },
    {
        "id": 99,
        "no": "099",
        "en": "work on",
        "ja": "～に取り組む",
        "section": "Supplement6 定型表現100",
        "audio": "099.mp3"
    },
    {
        "id": 100,
        "no": "100",
        "en": "save",
        "ja": "節約する、保存する、取っておく",
        "section": "基礎の400 語",
        "audio": "100.mp3"
    },
    {
        "id": 100,
        "no": "100",
        "en": "Would you mind doing ~?",
        "ja": "～していただいてもかまいませんか",
        "section": "Supplement6 定型表現100",
        "audio": "100.mp3"
    },
    {
        "id": 101,
        "no": "101",
        "en": "map",
        "ja": "地図",
        "section": "基礎の400 語",
        "audio": "101.mp3"
    },
    {
        "id": 102,
        "no": "102",
        "en": "ride",
        "ja": "乗る、車に乗せること",
        "section": "基礎の400 語",
        "audio": "102.mp3"
    },
    {
        "id": 103,
        "no": "103",
        "en": "almost",
        "ja": "もう少しで、ほとんど、～に近い",
        "section": "基礎の400 語",
        "audio": "103.mp3"
    },
    {
        "id": 104,
        "no": "104",
        "en": "goods",
        "ja": "品物",
        "section": "基礎の400 語",
        "audio": "104.mp3"
    },
    {
        "id": 105,
        "no": "105",
        "en": "quickly",
        "ja": "すばやく",
        "section": "基礎の400 語",
        "audio": "105.mp3"
    },
    {
        "id": 106,
        "no": "106",
        "en": "wide",
        "ja": "幅広い",
        "section": "基礎の400 語",
        "audio": "106.mp3"
    },
    {
        "id": 107,
        "no": "107",
        "en": "famous",
        "ja": "有名な",
        "section": "基礎の400 語",
        "audio": "107.mp3"
    },
    {
        "id": 108,
        "no": "108",
        "en": "power",
        "ja": "電力、権力、力",
        "section": "基礎の400 語",
        "audio": "108.mp3"
    },
    {
        "id": 109,
        "no": "109",
        "en": "book",
        "ja": "予約する、本",
        "section": "基礎の400 語",
        "audio": "109.mp3"
    },
    {
        "id": 110,
        "no": "110",
        "en": "wrong",
        "ja": "間違った",
        "section": "基礎の400 語",
        "audio": "110.mp3"
    },
    {
        "id": 111,
        "no": "111",
        "en": "play",
        "ja": "劇、演奏する、演じる、プレーする、遊ぶ",
        "section": "基礎の400 語",
        "audio": "111.mp3"
    },
    {
        "id": 112,
        "no": "112",
        "en": "usual",
        "ja": "通常の、いつもの",
        "section": "基礎の400 語",
        "audio": "112.mp3"
    },
    {
        "id": 113,
        "no": "113",
        "en": "certain",
        "ja": "確かな、ある決まった、特定の",
        "section": "基礎の400 語",
        "audio": "113.mp3"
    },
    {
        "id": 114,
        "no": "114",
        "en": "difficult",
        "ja": "難しい",
        "section": "基礎の400 語",
        "audio": "114.mp3"
    },
    {
        "id": 115,
        "no": "115",
        "en": "store",
        "ja": "保管する、保存する、店",
        "section": "基礎の400 語",
        "audio": "115.mp3"
    },
    {
        "id": 116,
        "no": "116",
        "en": "clear",
        "ja": "はっきりした、わかりやすい、片付ける",
        "section": "基礎の400 語",
        "audio": "116.mp3"
    },
    {
        "id": 117,
        "no": "117",
        "en": "forget",
        "ja": "忘れる",
        "section": "基礎の400 語",
        "audio": "117.mp3"
    },
    {
        "id": 118,
        "no": "118",
        "en": "rise",
        "ja": "上がる、上昇",
        "section": "基礎の400 語",
        "audio": "118.mp3"
    },
    {
        "id": 119,
        "no": "119",
        "en": "chance",
        "ja": "可能性、機会",
        "section": "基礎の400 語",
        "audio": "119.mp3"
    },
    {
        "id": 120,
        "no": "120",
        "en": "draw",
        "ja": "（ペンや鉛筆で絵を）描く、引く",
        "section": "基礎の400 語",
        "audio": "120.mp3"
    },
    {
        "id": 121,
        "no": "121",
        "en": "glad",
        "ja": "うれしい",
        "section": "基礎の400 語",
        "audio": "121.mp3"
    },
    {
        "id": 122,
        "no": "122",
        "en": "warm",
        "ja": "温かい、暖かい",
        "section": "基礎の400 語",
        "audio": "122.mp3"
    },
    {
        "id": 123,
        "no": "123",
        "en": "matter",
        "ja": "事柄、問題、件、重要である",
        "section": "基礎の400 語",
        "audio": "123.mp3"
    },
    {
        "id": 124,
        "no": "124",
        "en": "useful",
        "ja": "役立つ",
        "section": "基礎の400 語",
        "audio": "124.mp3"
    },
    {
        "id": 125,
        "no": "125",
        "en": "refer",
        "ja": "参照する、紹介する、～についてである、言及する",
        "section": "基礎の400 語",
        "audio": "125.mp3"
    },
    {
        "id": 126,
        "no": "126",
        "en": "safe",
        "ja": "安全な",
        "section": "基礎の400 語",
        "audio": "126.mp3"
    },
    {
        "id": 127,
        "no": "127",
        "en": "simple",
        "ja": "単純な、簡単な、シンプルな",
        "section": "基礎の400 語",
        "audio": "127.mp3"
    },
    {
        "id": 128,
        "no": "128",
        "en": "discover",
        "ja": "発見する",
        "section": "基礎の400 語",
        "audio": "128.mp3"
    },
    {
        "id": 129,
        "no": "129",
        "en": "park",
        "ja": "車を停める、公園",
        "section": "基礎の400 語",
        "audio": "129.mp3"
    },
    {
        "id": 130,
        "no": "130",
        "en": "promise",
        "ja": "約束する、約束",
        "section": "基礎の400 語",
        "audio": "130.mp3"
    },
    {
        "id": 131,
        "no": "131",
        "en": "proud",
        "ja": "誇りに思う",
        "section": "基礎の400 語",
        "audio": "131.mp3"
    },
    {
        "id": 132,
        "no": "132",
        "en": "pretty",
        "ja": "かなり、かわいい",
        "section": "基礎の400 語",
        "audio": "132.mp3"
    },
    {
        "id": 133,
        "no": "133",
        "en": "noise",
        "ja": "騒音",
        "section": "基礎の400 語",
        "audio": "133.mp3"
    },
    {
        "id": 134,
        "no": "134",
        "en": "perhaps",
        "ja": "もしかすると、たぶん、よろしければ",
        "section": "基礎の400 語",
        "audio": "134.mp3"
    },
    {
        "id": 135,
        "no": "135",
        "en": "farm",
        "ja": "農場、農園、農地",
        "section": "基礎の400 語",
        "audio": "135.mp3"
    },
    {
        "id": 136,
        "no": "136",
        "en": "product",
        "ja": "製品",
        "section": "基礎の400 語",
        "audio": "136.mp3"
    },
    {
        "id": 137,
        "no": "137",
        "en": "invite",
        "ja": "招待する、求める",
        "section": "基礎の400 語",
        "audio": "137.mp3"
    },
    {
        "id": 138,
        "no": "138",
        "en": "offer",
        "ja": "申し出る、提供する、申し出、オファー",
        "section": "基礎の400 語",
        "audio": "138.mp3"
    },
    {
        "id": 139,
        "no": "139",
        "en": "provide",
        "ja": "提供する",
        "section": "基礎の400 語",
        "audio": "139.mp3"
    },
    {
        "id": 140,
        "no": "140",
        "en": "include",
        "ja": "含む",
        "section": "基礎の400 語",
        "audio": "140.mp3"
    },
    {
        "id": 141,
        "no": "141",
        "en": "report",
        "ja": "報告書、報告する、出向く",
        "section": "基礎の400 語",
        "audio": "141.mp3"
    },
    {
        "id": 142,
        "no": "142",
        "en": "problem",
        "ja": "問題",
        "section": "基礎の400 語",
        "audio": "142.mp3"
    },
    {
        "id": 143,
        "no": "143",
        "en": "likely",
        "ja": "おそらく、～しそうだ",
        "section": "基礎の400 語",
        "audio": "143.mp3"
    },
    {
        "id": 144,
        "no": "144",
        "en": "request",
        "ja": "～を求める、頼む、依頼、要請",
        "section": "基礎の400 語",
        "audio": "144.mp3"
    },
    {
        "id": 145,
        "no": "145",
        "en": "cost",
        "ja": "（費用が）掛かる、費用",
        "section": "基礎の400 語",
        "audio": "145.mp3"
    },
    {
        "id": 146,
        "no": "146",
        "en": "complete",
        "ja": "完了させる、完成させる、記入する、完了した",
        "section": "基礎の400 語",
        "audio": "146.mp3"
    },
    {
        "id": 147,
        "no": "147",
        "en": "form",
        "ja": "用紙、フォーム、結成する",
        "section": "基礎の400 語",
        "audio": "147.mp3"
    },
    {
        "id": 148,
        "no": "148",
        "en": "experience",
        "ja": "経験、～を経験する",
        "section": "基礎の400 語",
        "audio": "148.mp3"
    },
    {
        "id": 149,
        "no": "149",
        "en": "attend",
        "ja": "出席する、参加する",
        "section": "基礎の400 語",
        "audio": "149.mp3"
    },
    {
        "id": 150,
        "no": "150",
        "en": "announce",
        "ja": "発表する",
        "section": "基礎の400 語",
        "audio": "150.mp3"
    },
    {
        "id": 151,
        "no": "151",
        "en": "position",
        "ja": "職、位置、位置に置く、位置を合わせる",
        "section": "基礎の400 語",
        "audio": "151.mp3"
    },
    {
        "id": 152,
        "no": "152",
        "en": "repair",
        "ja": "修理、修理する",
        "section": "基礎の400 語",
        "audio": "152.mp3"
    },
    {
        "id": 153,
        "no": "153",
        "en": "local",
        "ja": "地元の、地域の、地元の人",
        "section": "基礎の400 語",
        "audio": "153.mp3"
    },
    {
        "id": 154,
        "no": "154",
        "en": "purpose",
        "ja": "目的",
        "section": "基礎の400 語",
        "audio": "154.mp3"
    },
    {
        "id": 155,
        "no": "155",
        "en": "discuss",
        "ja": "話し合う",
        "section": "基礎の400 語",
        "audio": "155.mp3"
    },
    {
        "id": 156,
        "no": "156",
        "en": "expect",
        "ja": "予期する、予定する",
        "section": "基礎の400 語",
        "audio": "156.mp3"
    },
    {
        "id": 157,
        "no": "157",
        "en": "increase",
        "ja": "増やす、増える、増加",
        "section": "基礎の400 語",
        "audio": "157.mp3"
    },
    {
        "id": 158,
        "no": "158",
        "en": "mention",
        "ja": "述べる",
        "section": "基礎の400 語",
        "audio": "158.mp3"
    },
    {
        "id": 159,
        "no": "159",
        "en": "tour",
        "ja": "見学、旅行、見学する、旅行する",
        "section": "基礎の400 語",
        "audio": "159.mp3"
    },
    {
        "id": 160,
        "no": "160",
        "en": "charge",
        "ja": "料金、責任、請求する、充電する",
        "section": "基礎の400 語",
        "audio": "160.mp3"
    },
    {
        "id": 161,
        "no": "161",
        "en": "discount",
        "ja": "割引、割引にする",
        "section": "基礎の400 語",
        "audio": "161.mp3"
    },
    {
        "id": 162,
        "no": "162",
        "en": "research",
        "ja": "調査、研究、調査する、研究する",
        "section": "基礎の400 語",
        "audio": "162.mp3"
    },
    {
        "id": 163,
        "no": "163",
        "en": "hire",
        "ja": "雇う、採用者",
        "section": "基礎の400 語",
        "audio": "163.mp3"
    },
    {
        "id": 164,
        "no": "164",
        "en": "recently",
        "ja": "少し前に",
        "section": "基礎の400 語",
        "audio": "164.mp3"
    },
    {
        "id": 165,
        "no": "165",
        "en": "main",
        "ja": "主な、主要な",
        "section": "基礎の400 語",
        "audio": "165.mp3"
    },
    {
        "id": 166,
        "no": "166",
        "en": "account",
        "ja": "口座、アカウント、取引先、説明、説明する",
        "section": "基礎の400 語",
        "audio": "166.mp3"
    },
    {
        "id": 167,
        "no": "167",
        "en": "international",
        "ja": "国際的な、海外の",
        "section": "基礎の400 語",
        "audio": "167.mp3"
    },
    {
        "id": 168,
        "no": "168",
        "en": "copy",
        "ja": "(本・雑誌等の）冊・部、コピー、コピーする",
        "section": "基礎の400 語",
        "audio": "168.mp3"
    },
    {
        "id": 169,
        "no": "169",
        "en": "probably",
        "ja": "おそらく",
        "section": "基礎の400 語",
        "audio": "169.mp3"
    },
    {
        "id": 170,
        "no": "170",
        "en": "process",
        "ja": "工程、手続き、処理する",
        "section": "基礎の400 語",
        "audio": "170.mp3"
    },
    {
        "id": 171,
        "no": "171",
        "en": "result",
        "ja": "結果、生じる、（結果に）終わる",
        "section": "基礎の400 語",
        "audio": "171.mp3"
    },
    {
        "id": 172,
        "no": "172",
        "en": "president",
        "ja": "社長",
        "section": "基礎の400 語",
        "audio": "172.mp3"
    },
    {
        "id": 173,
        "no": "173",
        "en": "material",
        "ja": "材料、資料",
        "section": "基礎の400 語",
        "audio": "173.mp3"
    },
    {
        "id": 174,
        "no": "174",
        "en": "record",
        "ja": "記録、記録的な、記録する",
        "section": "基礎の400 語",
        "audio": "174.mp3"
    },
    {
        "id": 175,
        "no": "175",
        "en": "apply",
        "ja": "応募する、申請する、適用する",
        "section": "基礎の400 語",
        "audio": "175.mp3"
    },
    {
        "id": 176,
        "no": "176",
        "en": "detail",
        "ja": "詳細、詳しく述べる",
        "section": "基礎の400 語",
        "audio": "176.mp3"
    },
    {
        "id": 177,
        "no": "177",
        "en": "rate",
        "ja": "料金、割合、評価する",
        "section": "基礎の400 語",
        "audio": "177.mp3"
    },
    {
        "id": 178,
        "no": "178",
        "en": "industry",
        "ja": "産業、業界",
        "section": "基礎の400 語",
        "audio": "178.mp3"
    },
    {
        "id": 179,
        "no": "179",
        "en": "public",
        "ja": "公共の、一般の、一般の人",
        "section": "基礎の400 語",
        "audio": "179.mp3"
    },
    {
        "id": 180,
        "no": "180",
        "en": "yet",
        "ja": "まだ、もう",
        "section": "基礎の400 語",
        "audio": "180.mp3"
    },
    {
        "id": 181,
        "no": "181",
        "en": "possible",
        "ja": "可能な",
        "section": "基礎の400 語",
        "audio": "181.mp3"
    },
    {
        "id": 182,
        "no": "182",
        "en": "furniture",
        "ja": "家具",
        "section": "基礎の400 語",
        "audio": "182.mp3"
    },
    {
        "id": 183,
        "no": "183",
        "en": "arrange",
        "ja": "手配する、並べる",
        "section": "基礎の400 語",
        "audio": "183.mp3"
    },
    {
        "id": 184,
        "no": "184",
        "en": "notice",
        "ja": "通知、気付く",
        "section": "基礎の400 語",
        "audio": "184.mp3"
    },
    {
        "id": 185,
        "no": "185",
        "en": "create",
        "ja": "創造する、作り出す",
        "section": "基礎の400 語",
        "audio": "185.mp3"
    },
    {
        "id": 186,
        "no": "186",
        "en": "serve",
        "ja": "（食事を）出す、サービスを提供する、役割を果たす",
        "section": "基礎の400 語",
        "audio": "186.mp3"
    },
    {
        "id": 187,
        "no": "187",
        "en": "prepare",
        "ja": "準備する、用意する、支度する",
        "section": "基礎の400 語",
        "audio": "187.mp3"
    },
    {
        "id": 188,
        "no": "188",
        "en": "policy",
        "ja": "規定、方針",
        "section": "基礎の400 語",
        "audio": "188.mp3"
    },
    {
        "id": 189,
        "no": "189",
        "en": "package",
        "ja": "小包、一式",
        "section": "基礎の400 語",
        "audio": "189.mp3"
    },
    {
        "id": 190,
        "no": "190",
        "en": "agency",
        "ja": "代理店",
        "section": "基礎の400 語",
        "audio": "190.mp3"
    },
    {
        "id": 191,
        "no": "191",
        "en": "introduce",
        "ja": "紹介する、導入する",
        "section": "基礎の400 語",
        "audio": "191.mp3"
    },
    {
        "id": 192,
        "no": "192",
        "en": "reserve",
        "ja": "予約する、確保する",
        "section": "基礎の400 語",
        "audio": "192.mp3"
    },
    {
        "id": 193,
        "no": "193",
        "en": "allow",
        "ja": "許す、可能にする",
        "section": "基礎の400 語",
        "audio": "193.mp3"
    },
    {
        "id": 194,
        "no": "194",
        "en": "press",
        "ja": "押す、報道機関、マスコミ",
        "section": "基礎の400 語",
        "audio": "194.mp3"
    },
    {
        "id": 195,
        "no": "195",
        "en": "weather",
        "ja": "天気、天候",
        "section": "基礎の400 語",
        "audio": "195.mp3"
    },
    {
        "id": 196,
        "no": "196",
        "en": "support",
        "ja": "支援、支持、支援する、支持する",
        "section": "基礎の400 語",
        "audio": "196.mp3"
    },
    {
        "id": 197,
        "no": "197",
        "en": "publish",
        "ja": "出版する、公表する",
        "section": "基礎の400 語",
        "audio": "197.mp3"
    },
    {
        "id": 198,
        "no": "198",
        "en": "describe",
        "ja": "（言葉や文章で）説明する、描写する",
        "section": "基礎の400 語",
        "audio": "198.mp3"
    },
    {
        "id": 199,
        "no": "199",
        "en": "add",
        "ja": "加える",
        "section": "基礎の400 語",
        "audio": "199.mp3"
    },
    {
        "id": 200,
        "no": "200",
        "en": "deliver",
        "ja": "配達する、（演説等を）行う",
        "section": "基礎の400 語",
        "audio": "200.mp3"
    },
    {
        "id": 201,
        "no": "201",
        "en": "state",
        "ja": "述べる、明記する、状態、州",
        "section": "基礎の400 語",
        "audio": "201.mp3"
    },
    {
        "id": 202,
        "no": "202",
        "en": "accept",
        "ja": "受け入れる",
        "section": "基礎の400 語",
        "audio": "202.mp3"
    },
    {
        "id": 203,
        "no": "203",
        "en": "accounting",
        "ja": "会計、経理",
        "section": "基礎の400 語",
        "audio": "203.mp3"
    },
    {
        "id": 204,
        "no": "204",
        "en": "based",
        "ja": "拠点を置く、本社がある",
        "section": "基礎の400 語",
        "audio": "204.mp3"
    },
    {
        "id": 205,
        "no": "205",
        "en": "own",
        "ja": "（所有格の後で）自分自身の、所有する",
        "section": "基礎の400 語",
        "audio": "205.mp3"
    },
    {
        "id": 206,
        "no": "206",
        "en": "develop",
        "ja": "（計画等を）作り出す、開発する、発展させる",
        "section": "基礎の400 語",
        "audio": "206.mp3"
    },
    {
        "id": 207,
        "no": "207",
        "en": "excellent",
        "ja": "素晴らしい",
        "section": "基礎の400 語",
        "audio": "207.mp3"
    },
    {
        "id": 208,
        "no": "208",
        "en": "bill",
        "ja": "請求書、請求書を送る",
        "section": "基礎の400 語",
        "audio": "208.mp3"
    },
    {
        "id": 209,
        "no": "209",
        "en": "produce",
        "ja": "生産する、製作する、農産物",
        "section": "基礎の400 語",
        "audio": "209.mp3"
    },
    {
        "id": 210,
        "no": "210",
        "en": "host",
        "ja": "主催する、司会をする、主催者、司会者",
        "section": "基礎の400 語",
        "audio": "210.mp3"
    },
    {
        "id": 211,
        "no": "211",
        "en": "explain",
        "ja": "説明する",
        "section": "基礎の400 語",
        "audio": "211.mp3"
    },
    {
        "id": 212,
        "no": "212",
        "en": "less",
        "ja": "より少なく、より少ない",
        "section": "基礎の400 語",
        "audio": "212.mp3"
    },
    {
        "id": 213,
        "no": "213",
        "en": "passenger",
        "ja": "乗客",
        "section": "基礎の400 語",
        "audio": "213.mp3"
    },
    {
        "id": 214,
        "no": "214",
        "en": "successful",
        "ja": "成功した、うまく行く",
        "section": "基礎の400 語",
        "audio": "214.mp3"
    },
    {
        "id": 215,
        "no": "215",
        "en": "activity",
        "ja": "活動",
        "section": "基礎の400 語",
        "audio": "215.mp3"
    },
    {
        "id": 216,
        "no": "216",
        "en": "lead",
        "ja": "率いる、トップ、長、主演",
        "section": "基礎の400 語",
        "audio": "216.mp3"
    },
    {
        "id": 217,
        "no": "217",
        "en": "traffic",
        "ja": "交通",
        "section": "基礎の400 語",
        "audio": "217.mp3"
    },
    {
        "id": 218,
        "no": "218",
        "en": "actually",
        "ja": "実際",
        "section": "基礎の400 語",
        "audio": "218.mp3"
    },
    {
        "id": 219,
        "no": "219",
        "en": "follow",
        "ja": "従う、後について行く、後で行う、道を行く",
        "section": "基礎の400 語",
        "audio": "219.mp3"
    },
    {
        "id": 220,
        "no": "220",
        "en": "inform",
        "ja": "（人に）知らせる",
        "section": "基礎の400 語",
        "audio": "220.mp3"
    },
    {
        "id": 221,
        "no": "221",
        "en": "prefer",
        "ja": "～を（～よりも）好む",
        "section": "基礎の400 語",
        "audio": "221.mp3"
    },
    {
        "id": 222,
        "no": "222",
        "en": "final",
        "ja": "最終的な、最終の",
        "section": "基礎の400 語",
        "audio": "222.mp3"
    },
    {
        "id": 223,
        "no": "223",
        "en": "professional",
        "ja": "プロの、専門職の、職業上の、プロ、専門家",
        "section": "基礎の400 語",
        "audio": "223.mp3"
    },
    {
        "id": 224,
        "no": "224",
        "en": "improve",
        "ja": "改善する、改良する",
        "section": "基礎の400 語",
        "audio": "224.mp3"
    },
    {
        "id": 225,
        "no": "225",
        "en": "medical",
        "ja": "医療の",
        "section": "基礎の400 語",
        "audio": "225.mp3"
    },
    {
        "id": 226,
        "no": "226",
        "en": "official",
        "ja": "正式な、公式の、正規の、幹部",
        "section": "基礎の400 語",
        "audio": "226.mp3"
    },
    {
        "id": 227,
        "no": "227",
        "en": "continue",
        "ja": "続く、続ける",
        "section": "基礎の400 語",
        "audio": "227.mp3"
    },
    {
        "id": 228,
        "no": "228",
        "en": "total",
        "ja": "合計の、合計、合計～になる",
        "section": "基礎の400 語",
        "audio": "228.mp3"
    },
    {
        "id": 229,
        "no": "229",
        "en": "branch",
        "ja": "支店",
        "section": "基礎の400 語",
        "audio": "229.mp3"
    },
    {
        "id": 230,
        "no": "230",
        "en": "entrance",
        "ja": "入口、入場",
        "section": "基礎の400 語",
        "audio": "230.mp3"
    },
    {
        "id": 231,
        "no": "231",
        "en": "fair",
        "ja": "展示即売会、説明会、まずまずの、公平な",
        "section": "基礎の400 語",
        "audio": "231.mp3"
    },
    {
        "id": 232,
        "no": "232",
        "en": "attention",
        "ja": "注意、注目",
        "section": "基礎の400 語",
        "audio": "232.mp3"
    },
    {
        "id": 233,
        "no": "233",
        "en": "cleaning",
        "ja": "清掃",
        "section": "基礎の400 語",
        "audio": "233.mp3"
    },
    {
        "id": 234,
        "no": "234",
        "en": "expensive",
        "ja": "高価な、お金のかかる",
        "section": "基礎の400 語",
        "audio": "234.mp3"
    },
    {
        "id": 235,
        "no": "235",
        "en": "seated",
        "ja": "座っている、腰かけている",
        "section": "基礎の400 語",
        "audio": "235.mp3"
    },
    {
        "id": 236,
        "no": "236",
        "en": "share",
        "ja": "共有する、シェアする、株、占有率",
        "section": "基礎の400 語",
        "audio": "236.mp3"
    },
    {
        "id": 237,
        "no": "237",
        "en": "daily",
        "ja": "毎日、毎日の",
        "section": "基礎の400 語",
        "audio": "237.mp3"
    },
    {
        "id": 238,
        "no": "238",
        "en": "instead",
        "ja": "代わりに",
        "section": "基礎の400 語",
        "audio": "238.mp3"
    },
    {
        "id": 239,
        "no": "239",
        "en": "national",
        "ja": "全国的な、国の、国立の、国民の",
        "section": "基礎の400 語",
        "audio": "239.mp3"
    },
    {
        "id": 240,
        "no": "240",
        "en": "perform",
        "ja": "遂行する、演じる、公演する",
        "section": "基礎の400 語",
        "audio": "240.mp3"
    },
    {
        "id": 241,
        "no": "241",
        "en": "remove",
        "ja": "取り出す、取り除く、取り去る",
        "section": "基礎の400 語",
        "audio": "241.mp3"
    },
    {
        "id": 242,
        "no": "242",
        "en": "suggest",
        "ja": "提案する、示唆する",
        "section": "基礎の400 語",
        "audio": "242.mp3"
    },
    {
        "id": 243,
        "no": "243",
        "en": "direction",
        "ja": "道順、指示、方向",
        "section": "基礎の400 語",
        "audio": "243.mp3"
    },
    {
        "id": 244,
        "no": "244",
        "en": "express",
        "ja": "表す、急ぎの、急行の",
        "section": "基礎の400 語",
        "audio": "244.mp3"
    },
    {
        "id": 245,
        "no": "245",
        "en": "amount",
        "ja": "量、額",
        "section": "基礎の400 語",
        "audio": "245.mp3"
    },
    {
        "id": 246,
        "no": "246",
        "en": "personal",
        "ja": "個人的な、個人の",
        "section": "基礎の400 語",
        "audio": "246.mp3"
    },
    {
        "id": 247,
        "no": "247",
        "en": "publishing",
        "ja": "出版（業）",
        "section": "基礎の400 語",
        "audio": "247.mp3"
    },
    {
        "id": 248,
        "no": "248",
        "en": "view",
        "ja": "眺め、意見、眺める",
        "section": "基礎の400 語",
        "audio": "248.mp3"
    },
    {
        "id": 249,
        "no": "249",
        "en": "wish",
        "ja": "～したいと思う、願い",
        "section": "基礎の400 語",
        "audio": "249.mp3"
    },
    {
        "id": 250,
        "no": "250",
        "en": "appear",
        "ja": "現れる、掲載される、～のように思える",
        "section": "基礎の400 語",
        "audio": "250.mp3"
    },
    {
        "id": 251,
        "no": "251",
        "en": "arrangement",
        "ja": "手配、配置",
        "section": "基礎の400 語",
        "audio": "251.mp3"
    },
    {
        "id": 252,
        "no": "252",
        "en": "manage",
        "ja": "運営管理する、対処する、何とか～する",
        "section": "基礎の400 語",
        "audio": "252.mp3"
    },
    {
        "id": 253,
        "no": "253",
        "en": "direct",
        "ja": "直接の、直行の、指示する、向ける",
        "section": "基礎の400 語",
        "audio": "253.mp3"
    },
    {
        "id": 254,
        "no": "254",
        "en": "paid",
        "ja": "有給の、支払い済みの",
        "section": "基礎の400 語",
        "audio": "254.mp3"
    },
    {
        "id": 255,
        "no": "255",
        "en": "agree",
        "ja": "同意する、同感である",
        "section": "基礎の400 語",
        "audio": "255.mp3"
    },
    {
        "id": 256,
        "no": "256",
        "en": "cause",
        "ja": "引き起こす、原因、大義",
        "section": "基礎の400 語",
        "audio": "256.mp3"
    },
    {
        "id": 257,
        "no": "257",
        "en": "damage",
        "ja": "ダメージ、損傷、ダメージを与える、損なう",
        "section": "基礎の400 語",
        "audio": "257.mp3"
    },
    {
        "id": 258,
        "no": "258",
        "en": "raise",
        "ja": "上げる、（お金を）集める、高める、昇給",
        "section": "基礎の400 語",
        "audio": "258.mp3"
    },
    {
        "id": 259,
        "no": "259",
        "en": "respond",
        "ja": "返事をする、応じる",
        "section": "基礎の400 語",
        "audio": "259.mp3"
    },
    {
        "id": 260,
        "no": "260",
        "en": "directly",
        "ja": "直接",
        "section": "基礎の400 語",
        "audio": "260.mp3"
    },
    {
        "id": 261,
        "no": "261",
        "en": "limited",
        "ja": "限られた",
        "section": "基礎の400 語",
        "audio": "261.mp3"
    },
    {
        "id": 262,
        "no": "262",
        "en": "packaging",
        "ja": "梱包、パッケージ",
        "section": "基礎の400 語",
        "audio": "262.mp3"
    },
    {
        "id": 263,
        "no": "263",
        "en": "degree",
        "ja": "学位、程度、（温度や角度の単位の）度",
        "section": "基礎の400 語",
        "audio": "263.mp3"
    },
    {
        "id": 264,
        "no": "264",
        "en": "further",
        "ja": "さらなる、さらに",
        "section": "基礎の400 語",
        "audio": "264.mp3"
    },
    {
        "id": 265,
        "no": "265",
        "en": "quite",
        "ja": "かなり",
        "section": "基礎の400 語",
        "audio": "265.mp3"
    },
    {
        "id": 266,
        "no": "266",
        "en": "regular",
        "ja": "通常の、定期的な、常連の",
        "section": "基礎の400 語",
        "audio": "266.mp3"
    },
    {
        "id": 267,
        "no": "267",
        "en": "broadcast",
        "ja": "放送する、放送",
        "section": "基礎の400 語",
        "audio": "267.mp3"
    },
    {
        "id": 268,
        "no": "268",
        "en": "contain",
        "ja": "含む、中に入っている",
        "section": "基礎の400 語",
        "audio": "268.mp3"
    },
    {
        "id": 269,
        "no": "269",
        "en": "experienced",
        "ja": "経験豊富な",
        "section": "基礎の400 語",
        "audio": "269.mp3"
    },
    {
        "id": 270,
        "no": "270",
        "en": "fix",
        "ja": "直す、しっかり固定する、(日時などを)定める",
        "section": "基礎の400 語",
        "audio": "270.mp3"
    },
    {
        "id": 271,
        "no": "271",
        "en": "opinion",
        "ja": "意見",
        "section": "基礎の400 語",
        "audio": "271.mp3"
    },
    {
        "id": 272,
        "no": "272",
        "en": "society",
        "ja": "社会、協会",
        "section": "基礎の400 語",
        "audio": "272.mp3"
    },
    {
        "id": 273,
        "no": "273",
        "en": "condition",
        "ja": "状態",
        "section": "基礎の400 語",
        "audio": "273.mp3"
    },
    {
        "id": 274,
        "no": "274",
        "en": "correct",
        "ja": "正確な、正しい、修正する",
        "section": "基礎の400 語",
        "audio": "274.mp3"
    },
    {
        "id": 275,
        "no": "275",
        "en": "audience",
        "ja": "聴衆、観客",
        "section": "基礎の400 語",
        "audio": "275.mp3"
    },
    {
        "id": 276,
        "no": "276",
        "en": "general",
        "ja": "全体的な、一般的な",
        "section": "基礎の400 語",
        "audio": "276.mp3"
    },
    {
        "id": 277,
        "no": "277",
        "en": "advise",
        "ja": "勧める、忠告する、助言する",
        "section": "基礎の400 語",
        "audio": "277.mp3"
    },
    {
        "id": 278,
        "no": "278",
        "en": "especially",
        "ja": "特に",
        "section": "基礎の400 語",
        "audio": "278.mp3"
    },
    {
        "id": 279,
        "no": "279",
        "en": "period",
        "ja": "期間",
        "section": "基礎の400 語",
        "audio": "279.mp3"
    },
    {
        "id": 280,
        "no": "280",
        "en": "professor",
        "ja": "教授、大学の先生",
        "section": "基礎の400 語",
        "audio": "280.mp3"
    },
    {
        "id": 281,
        "no": "281",
        "en": "effort",
        "ja": "努力",
        "section": "基礎の400 語",
        "audio": "281.mp3"
    },
    {
        "id": 282,
        "no": "282",
        "en": "highly",
        "ja": "非常に",
        "section": "基礎の400 語",
        "audio": "282.mp3"
    },
    {
        "id": 283,
        "no": "283",
        "en": "lower",
        "ja": "下げる、より安い、より低い",
        "section": "基礎の400 語",
        "audio": "283.mp3"
    },
    {
        "id": 284,
        "no": "284",
        "en": "reason",
        "ja": "理由",
        "section": "基礎の400 語",
        "audio": "284.mp3"
    },
    {
        "id": 285,
        "no": "285",
        "en": "similar",
        "ja": "似ている",
        "section": "基礎の400 語",
        "audio": "285.mp3"
    },
    {
        "id": 286,
        "no": "286",
        "en": "fit",
        "ja": "（スペースに）入る、合う",
        "section": "基礎の400 語",
        "audio": "286.mp3"
    },
    {
        "id": 287,
        "no": "287",
        "en": "intended",
        "ja": "意図された、向けられた",
        "section": "基礎の400 語",
        "audio": "287.mp3"
    },
    {
        "id": 288,
        "no": "288",
        "en": "invitation",
        "ja": "招待（状）",
        "section": "基礎の400 語",
        "audio": "288.mp3"
    },
    {
        "id": 289,
        "no": "289",
        "en": "patient",
        "ja": "患者、我慢強い",
        "section": "基礎の400 語",
        "audio": "289.mp3"
    },
    {
        "id": 290,
        "no": "290",
        "en": "responsible",
        "ja": "担当している、責任がある",
        "section": "基礎の400 語",
        "audio": "290.mp3"
    },
    {
        "id": 291,
        "no": "291",
        "en": "certainly",
        "ja": "確かに、（返事で）かしこまりました",
        "section": "基礎の400 語",
        "audio": "291.mp3"
    },
    {
        "id": 292,
        "no": "292",
        "en": "method",
        "ja": "方法",
        "section": "基礎の400 語",
        "audio": "292.mp3"
    },
    {
        "id": 293,
        "no": "293",
        "en": "claim",
        "ja": "申し立て、主張、請求、主張する",
        "section": "基礎の400 語",
        "audio": "293.mp3"
    },
    {
        "id": 294,
        "no": "294",
        "en": "immediately",
        "ja": "ただちに、即座に",
        "section": "基礎の400 語",
        "audio": "294.mp3"
    },
    {
        "id": 295,
        "no": "295",
        "en": "law",
        "ja": "法律",
        "section": "基礎の400 語",
        "audio": "295.mp3"
    },
    {
        "id": 296,
        "no": "296",
        "en": "row",
        "ja": "列、（船を）漕ぐ",
        "section": "基礎の400 語",
        "audio": "296.mp3"
    },
    {
        "id": 297,
        "no": "297",
        "en": "downtown",
        "ja": "中心街の、中心街で、中心街",
        "section": "基礎の400 語",
        "audio": "297.mp3"
    },
    {
        "id": 298,
        "no": "298",
        "en": "helpful",
        "ja": "役立つ、助けになる",
        "section": "基礎の400 語",
        "audio": "298.mp3"
    },
    {
        "id": 299,
        "no": "299",
        "en": "track",
        "ja": "追跡する、追跡、線路、走路",
        "section": "基礎の400 語",
        "audio": "299.mp3"
    },
    {
        "id": 300,
        "no": "300",
        "en": "value",
        "ja": "価値、大切だと思う",
        "section": "基礎の400 語",
        "audio": "300.mp3"
    },
    {
        "id": 301,
        "no": "301",
        "en": "ability",
        "ja": "能力",
        "section": "基礎の400 語",
        "audio": "301.mp3"
    },
    {
        "id": 302,
        "no": "302",
        "en": "collect",
        "ja": "集める",
        "section": "基礎の400 語",
        "audio": "302.mp3"
    },
    {
        "id": 303,
        "no": "303",
        "en": "comfortable",
        "ja": "快適な、楽な、自信がある",
        "section": "基礎の400 語",
        "audio": "303.mp3"
    },
    {
        "id": 304,
        "no": "304",
        "en": "deal",
        "ja": "取引、量、取引条件、対処する",
        "section": "基礎の400 語",
        "audio": "304.mp3"
    },
    {
        "id": 305,
        "no": "305",
        "en": "gather",
        "ja": "集める、集まる",
        "section": "基礎の400 語",
        "audio": "305.mp3"
    },
    {
        "id": 306,
        "no": "306",
        "en": "unable",
        "ja": "（～することが）できない",
        "section": "基礎の400 語",
        "audio": "306.mp3"
    },
    {
        "id": 307,
        "no": "307",
        "en": "officer",
        "ja": "幹部、役員、警察官",
        "section": "基礎の400 語",
        "audio": "307.mp3"
    },
    {
        "id": 308,
        "no": "308",
        "en": "role",
        "ja": "役割、役柄",
        "section": "基礎の400 語",
        "audio": "308.mp3"
    },
    {
        "id": 309,
        "no": "309",
        "en": "bit",
        "ja": "少し",
        "section": "基礎の400 語",
        "audio": "309.mp3"
    },
    {
        "id": 310,
        "no": "310",
        "en": "figure",
        "ja": "数字、数値、人物",
        "section": "基礎の400 語",
        "audio": "310.mp3"
    },
    {
        "id": 311,
        "no": "311",
        "en": "fuel",
        "ja": "燃料",
        "section": "基礎の400 語",
        "audio": "311.mp3"
    },
    {
        "id": 312,
        "no": "312",
        "en": "regarding",
        "ja": "～に関する",
        "section": "基礎の400 語",
        "audio": "312.mp3"
    },
    {
        "id": 313,
        "no": "313",
        "en": "reasonable",
        "ja": "（値段が）手ごろな、妥当な",
        "section": "基礎の400 語",
        "audio": "313.mp3"
    },
    {
        "id": 314,
        "no": "314",
        "en": "twice",
        "ja": "2回、2倍",
        "section": "基礎の400 語",
        "audio": "314.mp3"
    },
    {
        "id": 315,
        "no": "315",
        "en": "arrival",
        "ja": "到着",
        "section": "基礎の400 語",
        "audio": "315.mp3"
    },
    {
        "id": 316,
        "no": "316",
        "en": "central",
        "ja": "中心の、中央の",
        "section": "基礎の400 語",
        "audio": "316.mp3"
    },
    {
        "id": 317,
        "no": "317",
        "en": "district",
        "ja": "地区",
        "section": "基礎の400 語",
        "audio": "317.mp3"
    },
    {
        "id": 318,
        "no": "318",
        "en": "modern",
        "ja": "現代的な、近代的な",
        "section": "基礎の400 語",
        "audio": "318.mp3"
    },
    {
        "id": 319,
        "no": "319",
        "en": "permit",
        "ja": "許可証、許可する",
        "section": "基礎の400 語",
        "audio": "319.mp3"
    },
    {
        "id": 320,
        "no": "320",
        "en": "positive",
        "ja": "良い、好意的な、積極的な",
        "section": "基礎の400 語",
        "audio": "320.mp3"
    },
    {
        "id": 321,
        "no": "321",
        "en": "profit",
        "ja": "利益、利益を与える",
        "section": "基礎の400 語",
        "audio": "321.mp3"
    },
    {
        "id": 322,
        "no": "322",
        "en": "rather",
        "ja": "かなり、むしろ",
        "section": "基礎の400 語",
        "audio": "322.mp3"
    },
    {
        "id": 323,
        "no": "323",
        "en": "surprised",
        "ja": "驚いた",
        "section": "基礎の400 語",
        "audio": "323.mp3"
    },
    {
        "id": 324,
        "no": "324",
        "en": "address",
        "ja": "対処する、話しかける、向ける、住所、アドレス、演説",
        "section": "基礎の400 語",
        "audio": "324.mp3"
    },
    {
        "id": 325,
        "no": "325",
        "en": "education",
        "ja": "教育",
        "section": "基礎の400 語",
        "audio": "325.mp3"
    },
    {
        "id": 326,
        "no": "326",
        "en": "tip",
        "ja": "アドバイス、コツ",
        "section": "基礎の400 語",
        "audio": "326.mp3"
    },
    {
        "id": 327,
        "no": "327",
        "en": "automobile",
        "ja": "自動車",
        "section": "基礎の400 語",
        "audio": "327.mp3"
    },
    {
        "id": 328,
        "no": "328",
        "en": "garage",
        "ja": "ガレージ、車庫",
        "section": "基礎の400 語",
        "audio": "328.mp3"
    },
    {
        "id": 329,
        "no": "329",
        "en": "handle",
        "ja": "扱う、対処する、手で扱う、取っ手",
        "section": "基礎の400 語",
        "audio": "329.mp3"
    },
    {
        "id": 330,
        "no": "330",
        "en": "knowledge",
        "ja": "知識",
        "section": "基礎の400 語",
        "audio": "330.mp3"
    },
    {
        "id": 331,
        "no": "331",
        "en": "private",
        "ja": "個人の、私立の、内密な",
        "section": "基礎の400 語",
        "audio": "331.mp3"
    },
    {
        "id": 332,
        "no": "332",
        "en": "realize",
        "ja": "気付く、実現する",
        "section": "基礎の400 語",
        "audio": "332.mp3"
    },
    {
        "id": 333,
        "no": "333",
        "en": "reply",
        "ja": "返事をする、返事、返答",
        "section": "基礎の400 語",
        "audio": "333.mp3"
    },
    {
        "id": 334,
        "no": "334",
        "en": "rest",
        "ja": "残り、休み、休む、休ませる",
        "section": "基礎の400 語",
        "audio": "334.mp3"
    },
    {
        "id": 335,
        "no": "335",
        "en": "familiar",
        "ja": "よく知っている、おなじみの",
        "section": "基礎の400 語",
        "audio": "335.mp3"
    },
    {
        "id": 336,
        "no": "336",
        "en": "former",
        "ja": "前の、かつての、前者",
        "section": "基礎の400 語",
        "audio": "336.mp3"
    },
    {
        "id": 337,
        "no": "337",
        "en": "heating",
        "ja": "暖房",
        "section": "基礎の400 語",
        "audio": "337.mp3"
    },
    {
        "id": 338,
        "no": "338",
        "en": "nearly",
        "ja": "ほとんど、もう少しで、近く",
        "section": "基礎の400 語",
        "audio": "338.mp3"
    },
    {
        "id": 339,
        "no": "339",
        "en": "plastic",
        "ja": "プラスチックの、ビニールの",
        "section": "基礎の400 語",
        "audio": "339.mp3"
    },
    {
        "id": 340,
        "no": "340",
        "en": "steel",
        "ja": "鋼鉄、鉄鋼",
        "section": "基礎の400 語",
        "audio": "340.mp3"
    },
    {
        "id": 341,
        "no": "341",
        "en": "demand",
        "ja": "需要、要求する",
        "section": "基礎の400 語",
        "audio": "341.mp3"
    },
    {
        "id": 342,
        "no": "342",
        "en": "distance",
        "ja": "距離",
        "section": "基礎の400 語",
        "audio": "342.mp3"
    },
    {
        "id": 343,
        "no": "343",
        "en": "easily",
        "ja": "簡単に",
        "section": "基礎の400 語",
        "audio": "343.mp3"
    },
    {
        "id": 344,
        "no": "344",
        "en": "pleasure",
        "ja": "喜び",
        "section": "基礎の400 語",
        "audio": "344.mp3"
    },
    {
        "id": 345,
        "no": "345",
        "en": "remain",
        "ja": "～のままでいる",
        "section": "基礎の400 語",
        "audio": "345.mp3"
    },
    {
        "id": 346,
        "no": "346",
        "en": "standard",
        "ja": "基準、標準の",
        "section": "基礎の400 語",
        "audio": "346.mp3"
    },
    {
        "id": 347,
        "no": "347",
        "en": "carefully",
        "ja": "慎重に、丁寧に",
        "section": "基礎の400 語",
        "audio": "347.mp3"
    },
    {
        "id": 348,
        "no": "348",
        "en": "clerk",
        "ja": "事務員、店員、ホテルの受付係",
        "section": "基礎の400 語",
        "audio": "348.mp3"
    },
    {
        "id": 349,
        "no": "349",
        "en": "common",
        "ja": "一般的な、よくある、普通の、共通の",
        "section": "基礎の400 語",
        "audio": "349.mp3"
    },
    {
        "id": 350,
        "no": "350",
        "en": "compare",
        "ja": "比べる",
        "section": "基礎の400 語",
        "audio": "350.mp3"
    },
    {
        "id": 351,
        "no": "351",
        "en": "electricity",
        "ja": "電気",
        "section": "基礎の400 語",
        "audio": "351.mp3"
    },
    {
        "id": 352,
        "no": "352",
        "en": "whole",
        "ja": "全部の、全部、全体",
        "section": "基礎の400 語",
        "audio": "352.mp3"
    },
    {
        "id": 353,
        "no": "353",
        "en": "abroad",
        "ja": "海外で、海外に",
        "section": "基礎の400 語",
        "audio": "353.mp3"
    },
    {
        "id": 354,
        "no": "354",
        "en": "approach",
        "ja": "方法、考え方、近づく",
        "section": "基礎の400 語",
        "audio": "354.mp3"
    },
    {
        "id": 355,
        "no": "355",
        "en": "borrow",
        "ja": "借りる",
        "section": "基礎の400 語",
        "audio": "355.mp3"
    },
    {
        "id": 356,
        "no": "356",
        "en": "bottom",
        "ja": "底、一番下、一番下の",
        "section": "基礎の400 語",
        "audio": "356.mp3"
    },
    {
        "id": 357,
        "no": "357",
        "en": "duty",
        "ja": "任務、職務、義務",
        "section": "基礎の400 語",
        "audio": "357.mp3"
    },
    {
        "id": 358,
        "no": "358",
        "en": "separate",
        "ja": "別々の、別の、分ける",
        "section": "基礎の400 語",
        "audio": "358.mp3"
    },
    {
        "id": 359,
        "no": "359",
        "en": "subject",
        "ja": "主題、件名、科目、～の対象となる",
        "section": "基礎の400 語",
        "audio": "359.mp3"
    },
    {
        "id": 360,
        "no": "360",
        "en": "tax",
        "ja": "税金",
        "section": "基礎の400 語",
        "audio": "360.mp3"
    },
    {
        "id": 361,
        "no": "361",
        "en": "earn",
        "ja": "得る、（お金を）稼ぐ",
        "section": "基礎の400 語",
        "audio": "361.mp3"
    },
    {
        "id": 362,
        "no": "362",
        "en": "fare",
        "ja": "運賃",
        "section": "基礎の400 語",
        "audio": "362.mp3"
    },
    {
        "id": 363,
        "no": "363",
        "en": "formal",
        "ja": "正式な、公式の、フォーマルな",
        "section": "基礎の400 語",
        "audio": "363.mp3"
    },
    {
        "id": 364,
        "no": "364",
        "en": "suit",
        "ja": "合う、スーツ",
        "section": "基礎の400 語",
        "audio": "364.mp3"
    },
    {
        "id": 365,
        "no": "365",
        "en": "worried",
        "ja": "心配して",
        "section": "基礎の400 語",
        "audio": "365.mp3"
    },
    {
        "id": 366,
        "no": "366",
        "en": "aware",
        "ja": "気付いて",
        "section": "基礎の400 語",
        "audio": "366.mp3"
    },
    {
        "id": 367,
        "no": "367",
        "en": "balance",
        "ja": "残金、残額、バランス、バランスを取る",
        "section": "基礎の400 語",
        "audio": "367.mp3"
    },
    {
        "id": 368,
        "no": "368",
        "en": "content",
        "ja": "中身、内容、満足、満足している",
        "section": "基礎の400 語",
        "audio": "368.mp3"
    },
    {
        "id": 369,
        "no": "369",
        "en": "lift",
        "ja": "持ち上げる",
        "section": "基礎の400 語",
        "audio": "369.mp3"
    },
    {
        "id": 370,
        "no": "370",
        "en": "occasion",
        "ja": "行事、（何かが起こる）時、好機",
        "section": "基礎の400 語",
        "audio": "370.mp3"
    },
    {
        "id": 371,
        "no": "371",
        "en": "proof",
        "ja": "証拠、証明",
        "section": "基礎の400 語",
        "audio": "371.mp3"
    },
    {
        "id": 372,
        "no": "372",
        "en": "respect",
        "ja": "尊敬、敬意、点、尊敬する、尊重する",
        "section": "基礎の400 語",
        "audio": "372.mp3"
    },
    {
        "id": 373,
        "no": "373",
        "en": "single",
        "ja": "たった一つの、一人用の、単独の",
        "section": "基礎の400 語",
        "audio": "373.mp3"
    },
    {
        "id": 374,
        "no": "374",
        "en": "wing",
        "ja": "（建物の）棟、翼",
        "section": "基礎の400 語",
        "audio": "374.mp3"
    },
    {
        "id": 375,
        "no": "375",
        "en": "worth",
        "ja": "価値がある",
        "section": "基礎の400 語",
        "audio": "375.mp3"
    },
    {
        "id": 376,
        "no": "376",
        "en": "anywhere",
        "ja": "どこにも、どこか、どこでも",
        "section": "基礎の400 語",
        "audio": "376.mp3"
    },
    {
        "id": 377,
        "no": "377",
        "en": "guess",
        "ja": "～だと思う",
        "section": "基礎の400 語",
        "audio": "377.mp3"
    },
    {
        "id": 378,
        "no": "378",
        "en": "length",
        "ja": "長さ",
        "section": "基礎の400 語",
        "audio": "378.mp3"
    },
    {
        "id": 379,
        "no": "379",
        "en": "solve",
        "ja": "解決する",
        "section": "基礎の400 語",
        "audio": "379.mp3"
    },
    {
        "id": 380,
        "no": "380",
        "en": "storm",
        "ja": "嵐、暴風雨",
        "section": "基礎の400 語",
        "audio": "380.mp3"
    },
    {
        "id": 381,
        "no": "381",
        "en": "willing",
        "ja": "～することを嫌がらない、～する気がある",
        "section": "基礎の400 語",
        "audio": "381.mp3"
    },
    {
        "id": 382,
        "no": "382",
        "en": "chapter",
        "ja": "章、支部",
        "section": "基礎の400 語",
        "audio": "382.mp3"
    },
    {
        "id": 383,
        "no": "383",
        "en": "crowded",
        "ja": "混雑した",
        "section": "基礎の400 語",
        "audio": "383.mp3"
    },
    {
        "id": 384,
        "no": "384",
        "en": "custom",
        "ja": "特注の、慣習",
        "section": "基礎の400 語",
        "audio": "384.mp3"
    },
    {
        "id": 385,
        "no": "385",
        "en": "praise",
        "ja": "ほめる、称賛",
        "section": "基礎の400 語",
        "audio": "385.mp3"
    },
    {
        "id": 386,
        "no": "386",
        "en": "bright",
        "ja": "（色が）あざやかな、明るい、輝かしい",
        "section": "基礎の400 語",
        "audio": "386.mp3"
    },
    {
        "id": 387,
        "no": "387",
        "en": "century",
        "ja": "1世紀",
        "section": "基礎の400 語",
        "audio": "387.mp3"
    },
    {
        "id": 388,
        "no": "388",
        "en": "scientific",
        "ja": "科学の",
        "section": "基礎の400 語",
        "audio": "388.mp3"
    },
    {
        "id": 389,
        "no": "389",
        "en": "vote",
        "ja": "投票する、投票",
        "section": "基礎の400 語",
        "audio": "389.mp3"
    },
    {
        "id": 390,
        "no": "390",
        "en": "anyway",
        "ja": "とにかく、ともあれ",
        "section": "基礎の400 語",
        "audio": "390.mp3"
    },
    {
        "id": 391,
        "no": "391",
        "en": "match",
        "ja": "合う、合わせる、匹敵する、（スポーツの）試合",
        "section": "基礎の400 語",
        "audio": "391.mp3"
    },
    {
        "id": 392,
        "no": "392",
        "en": "object",
        "ja": "（形のある）モノ、目的、反対する",
        "section": "基礎の400 語",
        "audio": "392.mp3"
    },
    {
        "id": 393,
        "no": "393",
        "en": "progress",
        "ja": "進歩、前進、進行状況、進む",
        "section": "基礎の400 語",
        "audio": "393.mp3"
    },
    {
        "id": 394,
        "no": "394",
        "en": "regard",
        "ja": "みなす、点",
        "section": "基礎の400 語",
        "audio": "394.mp3"
    },
    {
        "id": 395,
        "no": "395",
        "en": "rush",
        "ja": "急ぐこと、急ぎ、急ぐ、急がせる",
        "section": "基礎の400 語",
        "audio": "395.mp3"
    },
    {
        "id": 396,
        "no": "396",
        "en": "stair",
        "ja": "階段",
        "section": "基礎の400 語",
        "audio": "396.mp3"
    },
    {
        "id": 397,
        "no": "397",
        "en": "appearance",
        "ja": "外見、出現、出演",
        "section": "基礎の400 語",
        "audio": "397.mp3"
    },
    {
        "id": 398,
        "no": "398",
        "en": "cross",
        "ja": "横断する",
        "section": "基礎の400 語",
        "audio": "398.mp3"
    },
    {
        "id": 399,
        "no": "399",
        "en": "divide",
        "ja": "分ける",
        "section": "基礎の400 語",
        "audio": "399.mp3"
    },
    {
        "id": 400,
        "no": "400",
        "en": "empty",
        "ja": "空の、空にする",
        "section": "基礎の400 語",
        "audio": "400.mp3"
    },
    {
        "id": 401,
        "no": "401",
        "en": "existing",
        "ja": "従来の、既存の",
        "section": "頻出の300語",
        "audio": "401.mp3"
    },
    {
        "id": 402,
        "no": "402",
        "en": "following",
        "ja": "～に続いて、次の、以下の",
        "section": "頻出の300語",
        "audio": "402.mp3"
    },
    {
        "id": 403,
        "no": "403",
        "en": "measure",
        "ja": "（サイズや量などを）測る、評価する、対策",
        "section": "頻出の300語",
        "audio": "403.mp3"
    },
    {
        "id": 404,
        "no": "404",
        "en": "native",
        "ja": "出身の人、出身の、土着の",
        "section": "頻出の300語",
        "audio": "404.mp3"
    },
    {
        "id": 405,
        "no": "405",
        "en": "normal",
        "ja": "通常の、普通の",
        "section": "頻出の300語",
        "audio": "405.mp3"
    },
    {
        "id": 406,
        "no": "406",
        "en": "valuable",
        "ja": "貴重な",
        "section": "頻出の300語",
        "audio": "406.mp3"
    },
    {
        "id": 407,
        "no": "407",
        "en": "waste",
        "ja": "無駄、廃棄物、無駄にする",
        "section": "頻出の300語",
        "audio": "407.mp3"
    },
    {
        "id": 408,
        "no": "408",
        "en": "grateful",
        "ja": "感謝している",
        "section": "頻出の300語",
        "audio": "408.mp3"
    },
    {
        "id": 409,
        "no": "409",
        "en": "afterwards",
        "ja": "その後で",
        "section": "頻出の300語",
        "audio": "409.mp3"
    },
    {
        "id": 410,
        "no": "410",
        "en": "gain",
        "ja": "得る、増加、利益",
        "section": "頻出の300語",
        "audio": "410.mp3"
    },
    {
        "id": 411,
        "no": "411",
        "en": "manner",
        "ja": "やり方、方法",
        "section": "頻出の300語",
        "audio": "411.mp3"
    },
    {
        "id": 412,
        "no": "412",
        "en": "serious",
        "ja": "重大な、真剣な、重要な",
        "section": "頻出の300語",
        "audio": "412.mp3"
    },
    {
        "id": 413,
        "no": "413",
        "en": "exact",
        "ja": "正確な",
        "section": "頻出の300語",
        "audio": "413.mp3"
    },
    {
        "id": 414,
        "no": "414",
        "en": "imagine",
        "ja": "想像する",
        "section": "頻出の300語",
        "audio": "414.mp3"
    },
    {
        "id": 415,
        "no": "415",
        "en": "prevent",
        "ja": "防ぐ、阻む",
        "section": "頻出の300語",
        "audio": "415.mp3"
    },
    {
        "id": 416,
        "no": "416",
        "en": "prove",
        "ja": "わかる、判明する、証明する",
        "section": "頻出の300語",
        "audio": "416.mp3"
    },
    {
        "id": 417,
        "no": "417",
        "en": "strength",
        "ja": "強さ、強度、（液体等の）濃さ",
        "section": "頻出の300語",
        "audio": "417.mp3"
    },
    {
        "id": 418,
        "no": "418",
        "en": "practical",
        "ja": "実務の、実際の、実用的な",
        "section": "頻出の300語",
        "audio": "418.mp3"
    },
    {
        "id": 419,
        "no": "419",
        "en": "available",
        "ja": "手に入る、利用できる、都合が付く",
        "section": "頻出の300語",
        "audio": "419.mp3"
    },
    {
        "id": 420,
        "no": "420",
        "en": "item",
        "ja": "品物、項目",
        "section": "頻出の300語",
        "audio": "420.mp3"
    },
    {
        "id": 421,
        "no": "421",
        "en": "purchase",
        "ja": "～を購入する、購入",
        "section": "頻出の300語",
        "audio": "421.mp3"
    },
    {
        "id": 422,
        "no": "422",
        "en": "conference",
        "ja": "会議",
        "section": "頻出の300語",
        "audio": "422.mp3"
    },
    {
        "id": 423,
        "no": "423",
        "en": "contact",
        "ja": "連絡する、連絡、連絡先",
        "section": "頻出の300語",
        "audio": "423.mp3"
    },
    {
        "id": 424,
        "no": "424",
        "en": "article",
        "ja": "記事",
        "section": "頻出の300語",
        "audio": "424.mp3"
    },
    {
        "id": 425,
        "no": "425",
        "en": "review",
        "ja": "目を通す、論評する、検討、論評",
        "section": "頻出の300語",
        "audio": "425.mp3"
    },
    {
        "id": 426,
        "no": "426",
        "en": "equipment",
        "ja": "機器",
        "section": "頻出の300語",
        "audio": "426.mp3"
    },
    {
        "id": 427,
        "no": "427",
        "en": "client",
        "ja": "顧客",
        "section": "頻出の300語",
        "audio": "427.mp3"
    },
    {
        "id": 428,
        "no": "428",
        "en": "location",
        "ja": "場所、立地",
        "section": "頻出の300語",
        "audio": "428.mp3"
    },
    {
        "id": 429,
        "no": "429",
        "en": "interview",
        "ja": "面接、インタビュー、面接する、インタビューする",
        "section": "頻出の300語",
        "audio": "429.mp3"
    },
    {
        "id": 430,
        "no": "430",
        "en": "delivery",
        "ja": "配達",
        "section": "頻出の300語",
        "audio": "430.mp3"
    },
    {
        "id": 431,
        "no": "431",
        "en": "require",
        "ja": "必要とする、要求する",
        "section": "頻出の300語",
        "audio": "431.mp3"
    },
    {
        "id": 432,
        "no": "432",
        "en": "feature",
        "ja": "特徴、目玉、特集記事、大きく扱う、目玉にする",
        "section": "頻出の300語",
        "audio": "432.mp3"
    },
    {
        "id": 433,
        "no": "433",
        "en": "construction",
        "ja": "建設、工事",
        "section": "頻出の300語",
        "audio": "433.mp3"
    },
    {
        "id": 434,
        "no": "434",
        "en": "award",
        "ja": "賞、授与する",
        "section": "頻出の300語",
        "audio": "434.mp3"
    },
    {
        "id": 435,
        "no": "435",
        "en": "production",
        "ja": "生産、(映画や劇の）制作・作品",
        "section": "頻出の300語",
        "audio": "435.mp3"
    },
    {
        "id": 436,
        "no": "436",
        "en": "recommend",
        "ja": "薦める",
        "section": "頻出の300語",
        "audio": "436.mp3"
    },
    {
        "id": 437,
        "no": "437",
        "en": "survey",
        "ja": "アンケート調査、アンケート調査をする",
        "section": "頻出の300語",
        "audio": "437.mp3"
    },
    {
        "id": 438,
        "no": "438",
        "en": "appointment",
        "ja": "アポ、予約、指名",
        "section": "頻出の300語",
        "audio": "438.mp3"
    },
    {
        "id": 439,
        "no": "439",
        "en": "quality",
        "ja": "質、質が高い",
        "section": "頻出の300語",
        "audio": "439.mp3"
    },
    {
        "id": 440,
        "no": "440",
        "en": "supply",
        "ja": "必需品、用品、供給する",
        "section": "頻出の300語",
        "audio": "440.mp3"
    },
    {
        "id": 441,
        "no": "441",
        "en": "advertisement",
        "ja": "広告、宣伝",
        "section": "頻出の300語",
        "audio": "441.mp3"
    },
    {
        "id": 442,
        "no": "442",
        "en": "submit",
        "ja": "提出する",
        "section": "頻出の300語",
        "audio": "442.mp3"
    },
    {
        "id": 443,
        "no": "443",
        "en": "additional",
        "ja": "追加の",
        "section": "頻出の300語",
        "audio": "443.mp3"
    },
    {
        "id": 444,
        "no": "444",
        "en": "application",
        "ja": "応募、申請、応用",
        "section": "頻出の300語",
        "audio": "444.mp3"
    },
    {
        "id": 445,
        "no": "445",
        "en": "display",
        "ja": "展示、展示する",
        "section": "頻出の300語",
        "audio": "445.mp3"
    },
    {
        "id": 446,
        "no": "446",
        "en": "located",
        "ja": "位置している、～の場所にある",
        "section": "頻出の300語",
        "audio": "446.mp3"
    },
    {
        "id": 447,
        "no": "447",
        "en": "confirm",
        "ja": "確認する",
        "section": "頻出の300語",
        "audio": "447.mp3"
    },
    {
        "id": 448,
        "no": "448",
        "en": "session",
        "ja": "時間、集まり",
        "section": "頻出の300語",
        "audio": "448.mp3"
    },
    {
        "id": 449,
        "no": "449",
        "en": "budget",
        "ja": "予算",
        "section": "頻出の300語",
        "audio": "449.mp3"
    },
    {
        "id": 450,
        "no": "450",
        "en": "fee",
        "ja": "料金",
        "section": "頻出の300語",
        "audio": "450.mp3"
    },
    {
        "id": 451,
        "no": "451",
        "en": "annual",
        "ja": "年に１度の、毎年恒例の、年間の",
        "section": "頻出の300語",
        "audio": "451.mp3"
    },
    {
        "id": 452,
        "no": "452",
        "en": "payment",
        "ja": "支払い",
        "section": "頻出の300語",
        "audio": "452.mp3"
    },
    {
        "id": 453,
        "no": "453",
        "en": "firm",
        "ja": "会社、事務所",
        "section": "頻出の300語",
        "audio": "453.mp3"
    },
    {
        "id": 454,
        "no": "454",
        "en": "issue",
        "ja": "課題、（雑誌の）号、（正式に）出す、発行する",
        "section": "頻出の300語",
        "audio": "454.mp3"
    },
    {
        "id": 455,
        "no": "455",
        "en": "due",
        "ja": "期限の",
        "section": "頻出の300語",
        "audio": "455.mp3"
    },
    {
        "id": 456,
        "no": "456",
        "en": "exhibit",
        "ja": "展示物、展示会、展示する",
        "section": "頻出の300語",
        "audio": "456.mp3"
    },
    {
        "id": 457,
        "no": "457",
        "en": "financial",
        "ja": "お金の、財務の、金融の",
        "section": "頻出の300語",
        "audio": "457.mp3"
    },
    {
        "id": 458,
        "no": "458",
        "en": "contract",
        "ja": "契約（書）",
        "section": "頻出の300語",
        "audio": "458.mp3"
    },
    {
        "id": 459,
        "no": "459",
        "en": "performance",
        "ja": "公演、成績",
        "section": "頻出の300語",
        "audio": "459.mp3"
    },
    {
        "id": 460,
        "no": "460",
        "en": "development",
        "ja": "開発、成長",
        "section": "頻出の300語",
        "audio": "460.mp3"
    },
    {
        "id": 461,
        "no": "461",
        "en": "promote",
        "ja": "宣伝する、昇進させる、推進する",
        "section": "頻出の300語",
        "audio": "461.mp3"
    },
    {
        "id": 462,
        "no": "462",
        "en": "replace",
        "ja": "交換する、後任となる",
        "section": "頻出の300語",
        "audio": "462.mp3"
    },
    {
        "id": 463,
        "no": "463",
        "en": "benefit",
        "ja": "特典、福利厚生、～のためになる",
        "section": "頻出の300語",
        "audio": "463.mp3"
    },
    {
        "id": 464,
        "no": "464",
        "en": "document",
        "ja": "書類、（文書や映像等で）記録する",
        "section": "頻出の300語",
        "audio": "464.mp3"
    },
    {
        "id": 465,
        "no": "465",
        "en": "management",
        "ja": "経営、管理、経営陣",
        "section": "頻出の300語",
        "audio": "465.mp3"
    },
    {
        "id": 466,
        "no": "466",
        "en": "opportunity",
        "ja": "機会、チャンス",
        "section": "頻出の300語",
        "audio": "466.mp3"
    },
    {
        "id": 467,
        "no": "467",
        "en": "consider",
        "ja": "考える、検討する",
        "section": "頻出の300語",
        "audio": "467.mp3"
    },
    {
        "id": 468,
        "no": "468",
        "en": "clothing",
        "ja": "衣類、衣料品",
        "section": "頻出の300語",
        "audio": "468.mp3"
    },
    {
        "id": 469,
        "no": "469",
        "en": "select",
        "ja": "選ぶ、選び抜かれた",
        "section": "頻出の300語",
        "audio": "469.mp3"
    },
    {
        "id": 470,
        "no": "470",
        "en": "delay",
        "ja": "遅らせる、遅れ",
        "section": "頻出の300語",
        "audio": "470.mp3"
    },
    {
        "id": 471,
        "no": "471",
        "en": "option",
        "ja": "選択肢",
        "section": "頻出の300語",
        "audio": "471.mp3"
    },
    {
        "id": 472,
        "no": "472",
        "en": "reduce",
        "ja": "（値段を）下げる、減らす",
        "section": "頻出の300語",
        "audio": "472.mp3"
    },
    {
        "id": 473,
        "no": "473",
        "en": "instruction",
        "ja": "説明書、指示書、指示",
        "section": "頻出の300語",
        "audio": "473.mp3"
    },
    {
        "id": 474,
        "no": "474",
        "en": "résumé",
        "ja": "履歴書",
        "section": "頻出の300語",
        "audio": "474.mp3"
    },
    {
        "id": 475,
        "no": "475",
        "en": "rent",
        "ja": "賃貸借、家賃、賃貸借する",
        "section": "頻出の300語",
        "audio": "475.mp3"
    },
    {
        "id": 476,
        "no": "476",
        "en": "extra",
        "ja": "余分な、追加の",
        "section": "頻出の300語",
        "audio": "476.mp3"
    },
    {
        "id": 477,
        "no": "477",
        "en": "membership",
        "ja": "会員資格",
        "section": "頻出の300語",
        "audio": "477.mp3"
    },
    {
        "id": 478,
        "no": "478",
        "en": "upcoming",
        "ja": "今度の",
        "section": "頻出の300語",
        "audio": "478.mp3"
    },
    {
        "id": 479,
        "no": "479",
        "en": "transportation",
        "ja": "輸送手段、輸送機関、輸送",
        "section": "頻出の300語",
        "audio": "479.mp3"
    },
    {
        "id": 480,
        "no": "480",
        "en": "cancel",
        "ja": "中止する、キャンセルする",
        "section": "頻出の300語",
        "audio": "480.mp3"
    },
    {
        "id": 481,
        "no": "481",
        "en": "conduct",
        "ja": "実行する、実施する",
        "section": "頻出の300語",
        "audio": "481.mp3"
    },
    {
        "id": 482,
        "no": "482",
        "en": "per",
        "ja": "～につき、～あたり",
        "section": "頻出の300語",
        "audio": "482.mp3"
    },
    {
        "id": 483,
        "no": "483",
        "en": "representative",
        "ja": "担当者、代表者",
        "section": "頻出の300語",
        "audio": "483.mp3"
    },
    {
        "id": 484,
        "no": "484",
        "en": "proposal",
        "ja": "提案",
        "section": "頻出の300語",
        "audio": "484.mp3"
    },
    {
        "id": 485,
        "no": "485",
        "en": "corporate",
        "ja": "企業の、法人の",
        "section": "頻出の300語",
        "audio": "485.mp3"
    },
    {
        "id": 486,
        "no": "486",
        "en": "gallery",
        "ja": "美術館、画廊",
        "section": "頻出の300語",
        "audio": "486.mp3"
    },
    {
        "id": 487,
        "no": "487",
        "en": "encourage",
        "ja": "奨励する、促す",
        "section": "頻出の300語",
        "audio": "487.mp3"
    },
    {
        "id": 488,
        "no": "488",
        "en": "author",
        "ja": "著者、作者、（本を）書く",
        "section": "頻出の300語",
        "audio": "488.mp3"
    },
    {
        "id": 489,
        "no": "489",
        "en": "committee",
        "ja": "委員会",
        "section": "頻出の300語",
        "audio": "489.mp3"
    },
    {
        "id": 490,
        "no": "490",
        "en": "latest",
        "ja": "最新の",
        "section": "頻出の300語",
        "audio": "490.mp3"
    },
    {
        "id": 491,
        "no": "491",
        "en": "enclose",
        "ja": "同封する、囲む",
        "section": "頻出の300語",
        "audio": "491.mp3"
    },
    {
        "id": 492,
        "no": "492",
        "en": "expand",
        "ja": "拡大する、拡張する、進出する",
        "section": "頻出の300語",
        "audio": "492.mp3"
    },
    {
        "id": 493,
        "no": "493",
        "en": "editor",
        "ja": "編集者",
        "section": "頻出の300語",
        "audio": "493.mp3"
    },
    {
        "id": 494,
        "no": "494",
        "en": "fund",
        "ja": "資金、基金、資金を提供する",
        "section": "頻出の300語",
        "audio": "494.mp3"
    },
    {
        "id": 495,
        "no": "495",
        "en": "vehicle",
        "ja": "乗り物、車両",
        "section": "頻出の300語",
        "audio": "495.mp3"
    },
    {
        "id": 496,
        "no": "496",
        "en": "focus",
        "ja": "（注意・意識等を）～に集中させる、重点を置く、焦点",
        "section": "頻出の300語",
        "audio": "496.mp3"
    },
    {
        "id": 497,
        "no": "497",
        "en": "approve",
        "ja": "承認する、賛成する",
        "section": "頻出の300語",
        "audio": "497.mp3"
    },
    {
        "id": 498,
        "no": "498",
        "en": "sponsor",
        "ja": "スポンサーになる、後援する、スポンサー",
        "section": "頻出の300語",
        "audio": "498.mp3"
    },
    {
        "id": 499,
        "no": "499",
        "en": "previous",
        "ja": "前の、以前の",
        "section": "頻出の300語",
        "audio": "499.mp3"
    },
    {
        "id": 500,
        "no": "500",
        "en": "reception",
        "ja": "パーティー、受付",
        "section": "頻出の300語",
        "audio": "500.mp3"
    },
    {
        "id": 501,
        "no": "501",
        "en": "property",
        "ja": "不動産、資産",
        "section": "頻出の300語",
        "audio": "501.mp3"
    },
    {
        "id": 502,
        "no": "502",
        "en": "campaign",
        "ja": "キャンペーン",
        "section": "頻出の300語",
        "audio": "502.mp3"
    },
    {
        "id": 503,
        "no": "503",
        "en": "replacement",
        "ja": "後任、交換、交換品",
        "section": "頻出の300語",
        "audio": "503.mp3"
    },
    {
        "id": 504,
        "no": "504",
        "en": "organize",
        "ja": "（イベントなどを）とりまとめる、組織化する、整理する",
        "section": "頻出の300語",
        "audio": "504.mp3"
    },
    {
        "id": 505,
        "no": "505",
        "en": "competition",
        "ja": "大会、競争、競争相手",
        "section": "頻出の300語",
        "audio": "505.mp3"
    },
    {
        "id": 506,
        "no": "506",
        "en": "employment",
        "ja": "雇用",
        "section": "頻出の300語",
        "audio": "506.mp3"
    },
    {
        "id": 507,
        "no": "507",
        "en": "appreciate",
        "ja": "感謝する、ありがたく思う",
        "section": "頻出の300語",
        "audio": "507.mp3"
    },
    {
        "id": 508,
        "no": "508",
        "en": "indicate",
        "ja": "示す、示唆する",
        "section": "頻出の300語",
        "audio": "508.mp3"
    },
    {
        "id": 509,
        "no": "509",
        "en": "reference",
        "ja": "照会先、照会状、参照",
        "section": "頻出の300語",
        "audio": "509.mp3"
    },
    {
        "id": 510,
        "no": "510",
        "en": "resident",
        "ja": "住民、住人",
        "section": "頻出の300語",
        "audio": "510.mp3"
    },
    {
        "id": 511,
        "no": "511",
        "en": "individual",
        "ja": "個人の、個別の、個人",
        "section": "頻出の300語",
        "audio": "511.mp3"
    },
    {
        "id": 512,
        "no": "512",
        "en": "advance",
        "ja": "先行した、事前の、進歩、前進",
        "section": "頻出の300語",
        "audio": "512.mp3"
    },
    {
        "id": 513,
        "no": "513",
        "en": "organization",
        "ja": "団体、会社、組織（化）",
        "section": "頻出の300語",
        "audio": "513.mp3"
    },
    {
        "id": 514,
        "no": "514",
        "en": "remind",
        "ja": "再確認する、念押しする",
        "section": "頻出の300語",
        "audio": "514.mp3"
    },
    {
        "id": 515,
        "no": "515",
        "en": "section",
        "ja": "一部、コーナー、欄、章",
        "section": "頻出の300語",
        "audio": "515.mp3"
    },
    {
        "id": 516,
        "no": "516",
        "en": "senior",
        "ja": "（役職などが）上級の、上位の",
        "section": "頻出の300語",
        "audio": "516.mp3"
    },
    {
        "id": 517,
        "no": "517",
        "en": "technical",
        "ja": "技術的な",
        "section": "頻出の300語",
        "audio": "517.mp3"
    },
    {
        "id": 518,
        "no": "518",
        "en": "estimate",
        "ja": "見積もり、見積もる",
        "section": "頻出の300語",
        "audio": "518.mp3"
    },
    {
        "id": 519,
        "no": "519",
        "en": "publication",
        "ja": "出版物、出版",
        "section": "頻出の300語",
        "audio": "519.mp3"
    },
    {
        "id": 520,
        "no": "520",
        "en": "unfortunately",
        "ja": "残念なことに、残念ながら",
        "section": "頻出の300語",
        "audio": "520.mp3"
    },
    {
        "id": 521,
        "no": "521",
        "en": "expense",
        "ja": "費用、経費",
        "section": "頻出の300語",
        "audio": "521.mp3"
    },
    {
        "id": 522,
        "no": "522",
        "en": "operation",
        "ja": "業務、運営、操業、作動",
        "section": "頻出の300語",
        "audio": "522.mp3"
    },
    {
        "id": 523,
        "no": "523",
        "en": "exhibition",
        "ja": "展示会、展示物、展示",
        "section": "頻出の300語",
        "audio": "523.mp3"
    },
    {
        "id": 524,
        "no": "524",
        "en": "operate",
        "ja": "操作する、運営する",
        "section": "頻出の300語",
        "audio": "524.mp3"
    },
    {
        "id": 525,
        "no": "525",
        "en": "original",
        "ja": "元の、最初の、オリジナル、原本",
        "section": "頻出の300語",
        "audio": "525.mp3"
    },
    {
        "id": 526,
        "no": "526",
        "en": "receipt",
        "ja": "領収書、受取",
        "section": "頻出の300語",
        "audio": "526.mp3"
    },
    {
        "id": 527,
        "no": "527",
        "en": "division",
        "ja": "部門、配分、分担",
        "section": "頻出の300語",
        "audio": "527.mp3"
    },
    {
        "id": 528,
        "no": "528",
        "en": "photography",
        "ja": "写真撮影",
        "section": "頻出の300語",
        "audio": "528.mp3"
    },
    {
        "id": 529,
        "no": "529",
        "en": "reschedule",
        "ja": "スケジュール変更する",
        "section": "頻出の300語",
        "audio": "529.mp3"
    },
    {
        "id": 530,
        "no": "530",
        "en": "stock",
        "ja": "在庫、株",
        "section": "頻出の300語",
        "audio": "530.mp3"
    },
    {
        "id": 531,
        "no": "531",
        "en": "association",
        "ja": "協会、組合",
        "section": "頻出の300語",
        "audio": "531.mp3"
    },
    {
        "id": 532,
        "no": "532",
        "en": "concern",
        "ja": "心配、懸念、関心事",
        "section": "頻出の300語",
        "audio": "532.mp3"
    },
    {
        "id": 533,
        "no": "533",
        "en": "luggage",
        "ja": "旅行かばん、手荷物",
        "section": "頻出の300語",
        "audio": "533.mp3"
    },
    {
        "id": 534,
        "no": "534",
        "en": "suggestion",
        "ja": "提案、示唆",
        "section": "頻出の300語",
        "audio": "534.mp3"
    },
    {
        "id": 535,
        "no": "535",
        "en": "launch",
        "ja": "開始、発売、開始する、発売する",
        "section": "頻出の300語",
        "audio": "535.mp3"
    },
    {
        "id": 536,
        "no": "536",
        "en": "procedure",
        "ja": "手続き、手順",
        "section": "頻出の300語",
        "audio": "536.mp3"
    },
    {
        "id": 537,
        "no": "537",
        "en": "description",
        "ja": "説明、記述、描写",
        "section": "頻出の300語",
        "audio": "537.mp3"
    },
    {
        "id": 538,
        "no": "538",
        "en": "variety",
        "ja": "種類",
        "section": "頻出の300語",
        "audio": "538.mp3"
    },
    {
        "id": 539,
        "no": "539",
        "en": "term",
        "ja": "条件、期間、観点",
        "section": "頻出の300語",
        "audio": "539.mp3"
    },
    {
        "id": 540,
        "no": "540",
        "en": "distribute",
        "ja": "配布する、流通させる",
        "section": "頻出の300語",
        "audio": "540.mp3"
    },
    {
        "id": 541,
        "no": "541",
        "en": "leading",
        "ja": "首位の、トップの",
        "section": "頻出の300語",
        "audio": "541.mp3"
    },
    {
        "id": 542,
        "no": "542",
        "en": "mainly",
        "ja": "主に",
        "section": "頻出の300語",
        "audio": "542.mp3"
    },
    {
        "id": 543,
        "no": "543",
        "en": "release",
        "ja": "発売する、公表する、発売",
        "section": "頻出の300語",
        "audio": "543.mp3"
    },
    {
        "id": 544,
        "no": "544",
        "en": "response",
        "ja": "返答、返事",
        "section": "頻出の300語",
        "audio": "544.mp3"
    },
    {
        "id": 545,
        "no": "545",
        "en": "retire",
        "ja": "退職する",
        "section": "頻出の300語",
        "audio": "545.mp3"
    },
    {
        "id": 546,
        "no": "546",
        "en": "determine",
        "ja": "決定する、判断する、決心する",
        "section": "頻出の300語",
        "audio": "546.mp3"
    },
    {
        "id": 547,
        "no": "547",
        "en": "expert",
        "ja": "専門家、専門的な",
        "section": "頻出の300語",
        "audio": "547.mp3"
    },
    {
        "id": 548,
        "no": "548",
        "en": "journal",
        "ja": "専門誌",
        "section": "頻出の300語",
        "audio": "548.mp3"
    },
    {
        "id": 549,
        "no": "549",
        "en": "series",
        "ja": "一連のモノ、シリーズ（モノ）",
        "section": "頻出の300語",
        "audio": "549.mp3"
    },
    {
        "id": 550,
        "no": "550",
        "en": "requirement",
        "ja": "要求、必要条件",
        "section": "頻出の300語",
        "audio": "550.mp3"
    },
    {
        "id": 551,
        "no": "551",
        "en": "assistance",
        "ja": "支援、援助",
        "section": "頻出の300語",
        "audio": "551.mp3"
    },
    {
        "id": 552,
        "no": "552",
        "en": "council",
        "ja": "議会",
        "section": "頻出の300語",
        "audio": "552.mp3"
    },
    {
        "id": 553,
        "no": "553",
        "en": "electronic",
        "ja": "電子の、電子版の、オンラインの",
        "section": "頻出の300語",
        "audio": "553.mp3"
    },
    {
        "id": 554,
        "no": "554",
        "en": "recommendation",
        "ja": "推薦",
        "section": "頻出の300語",
        "audio": "554.mp3"
    },
    {
        "id": 555,
        "no": "555",
        "en": "attract",
        "ja": "引き付ける、呼び込む、誘致する",
        "section": "頻出の300語",
        "audio": "555.mp3"
    },
    {
        "id": 556,
        "no": "556",
        "en": "quarter",
        "ja": "四半期",
        "section": "頻出の300語",
        "audio": "556.mp3"
    },
    {
        "id": 557,
        "no": "557",
        "en": "promotion",
        "ja": "昇進、販売促進、促進",
        "section": "頻出の300語",
        "audio": "557.mp3"
    },
    {
        "id": 558,
        "no": "558",
        "en": "concerned",
        "ja": "心配して",
        "section": "頻出の300語",
        "audio": "558.mp3"
    },
    {
        "id": 559,
        "no": "559",
        "en": "extend",
        "ja": "延長する、（感謝、おわび、招待、歓迎等の気持ちを）表す",
        "section": "頻出の300語",
        "audio": "559.mp3"
    },
    {
        "id": 560,
        "no": "560",
        "en": "trail",
        "ja": "（田舎の）小道、田舎道",
        "section": "頻出の300語",
        "audio": "560.mp3"
    },
    {
        "id": 561,
        "no": "561",
        "en": "avoid",
        "ja": "避ける",
        "section": "頻出の300語",
        "audio": "561.mp3"
    },
    {
        "id": 562,
        "no": "562",
        "en": "celebration",
        "ja": "お祝い、祝典",
        "section": "頻出の300語",
        "audio": "562.mp3"
    },
    {
        "id": 563,
        "no": "563",
        "en": "impress",
        "ja": "感心させる、好印象を与える",
        "section": "頻出の300語",
        "audio": "563.mp3"
    },
    {
        "id": 564,
        "no": "564",
        "en": "seek",
        "ja": "探し求める",
        "section": "頻出の300語",
        "audio": "564.mp3"
    },
    {
        "id": 565,
        "no": "565",
        "en": "coworker",
        "ja": "同僚",
        "section": "頻出の300語",
        "audio": "565.mp3"
    },
    {
        "id": 566,
        "no": "566",
        "en": "extension",
        "ja": "内線、延長",
        "section": "頻出の300語",
        "audio": "566.mp3"
    },
    {
        "id": 567,
        "no": "567",
        "en": "postpone",
        "ja": "延期する",
        "section": "頻出の300語",
        "audio": "567.mp3"
    },
    {
        "id": 568,
        "no": "568",
        "en": "region",
        "ja": "地域",
        "section": "頻出の300語",
        "audio": "568.mp3"
    },
    {
        "id": 569,
        "no": "569",
        "en": "range",
        "ja": "範囲、範囲に渡る",
        "section": "頻出の300語",
        "audio": "569.mp3"
    },
    {
        "id": 570,
        "no": "570",
        "en": "convention",
        "ja": "会議",
        "section": "頻出の300語",
        "audio": "570.mp3"
    },
    {
        "id": 571,
        "no": "571",
        "en": "solution",
        "ja": "解決策、溶液",
        "section": "頻出の300語",
        "audio": "571.mp3"
    },
    {
        "id": 572,
        "no": "572",
        "en": "according to",
        "ja": "～によると、～に従って",
        "section": "頻出の300語",
        "audio": "572.mp3"
    },
    {
        "id": 573,
        "no": "573",
        "en": "affect",
        "ja": "影響する",
        "section": "頻出の300語",
        "audio": "573.mp3"
    },
    {
        "id": 574,
        "no": "574",
        "en": "commercial",
        "ja": "商業（用）の、商業的な、CM",
        "section": "頻出の300語",
        "audio": "574.mp3"
    },
    {
        "id": 575,
        "no": "575",
        "en": "convenient",
        "ja": "便利な、都合の良い",
        "section": "頻出の300語",
        "audio": "575.mp3"
    },
    {
        "id": 576,
        "no": "576",
        "en": "exchange",
        "ja": "交換する、交換",
        "section": "頻出の300語",
        "audio": "576.mp3"
    },
    {
        "id": 577,
        "no": "577",
        "en": "artwork",
        "ja": "芸術作品、（本や雑誌の中の）イラストや写真",
        "section": "頻出の300語",
        "audio": "577.mp3"
    },
    {
        "id": 578,
        "no": "578",
        "en": "agreement",
        "ja": "契約（書）、同意（書）、合意",
        "section": "頻出の300語",
        "audio": "578.mp3"
    },
    {
        "id": 579,
        "no": "579",
        "en": "government",
        "ja": "政府",
        "section": "頻出の300語",
        "audio": "579.mp3"
    },
    {
        "id": 580,
        "no": "580",
        "en": "major",
        "ja": "主要な、大きな、重大な",
        "section": "頻出の300語",
        "audio": "580.mp3"
    },
    {
        "id": 581,
        "no": "581",
        "en": "potential",
        "ja": "見込みがある、潜在的な、可能性",
        "section": "頻出の300語",
        "audio": "581.mp3"
    },
    {
        "id": 582,
        "no": "582",
        "en": "maintain",
        "ja": "維持管理する、維持する",
        "section": "頻出の300語",
        "audio": "582.mp3"
    },
    {
        "id": 583,
        "no": "583",
        "en": "responsibility",
        "ja": "責任、職務、職責",
        "section": "頻出の300語",
        "audio": "583.mp3"
    },
    {
        "id": 584,
        "no": "584",
        "en": "admission",
        "ja": "入場（料）、入会（費）、入場許可",
        "section": "頻出の300語",
        "audio": "584.mp3"
    },
    {
        "id": 585,
        "no": "585",
        "en": "missing",
        "ja": "見つからない、欠けている",
        "section": "頻出の300語",
        "audio": "585.mp3"
    },
    {
        "id": 586,
        "no": "586",
        "en": "apologize",
        "ja": "おわびする",
        "section": "頻出の300語",
        "audio": "586.mp3"
    },
    {
        "id": 587,
        "no": "587",
        "en": "nearby",
        "ja": "近くに、近くの",
        "section": "頻出の300語",
        "audio": "587.mp3"
    },
    {
        "id": 588,
        "no": "588",
        "en": "paperwork",
        "ja": "書類、書類作業",
        "section": "頻出の300語",
        "audio": "588.mp3"
    },
    {
        "id": 589,
        "no": "589",
        "en": "attach",
        "ja": "添付する",
        "section": "頻出の300語",
        "audio": "589.mp3"
    },
    {
        "id": 590,
        "no": "590",
        "en": "honor",
        "ja": "称える、（契約等を）守る、名誉",
        "section": "頻出の300語",
        "audio": "590.mp3"
    },
    {
        "id": 591,
        "no": "591",
        "en": "search",
        "ja": "探すこと、探す、サーチする",
        "section": "頻出の300語",
        "audio": "591.mp3"
    },
    {
        "id": 592,
        "no": "592",
        "en": "effective",
        "ja": "効果的な、有効な",
        "section": "頻出の300語",
        "audio": "592.mp3"
    },
    {
        "id": 593,
        "no": "593",
        "en": "temporary",
        "ja": "一時的な、臨時の",
        "section": "頻出の300語",
        "audio": "593.mp3"
    },
    {
        "id": 594,
        "no": "594",
        "en": "destination",
        "ja": "目的地、行き先",
        "section": "頻出の300語",
        "audio": "594.mp3"
    },
    {
        "id": 595,
        "no": "595",
        "en": "investment",
        "ja": "投資",
        "section": "頻出の300語",
        "audio": "595.mp3"
    },
    {
        "id": 596,
        "no": "596",
        "en": "obtain",
        "ja": "得る、取得する",
        "section": "頻出の300語",
        "audio": "596.mp3"
    },
    {
        "id": 597,
        "no": "597",
        "en": "real estate",
        "ja": "不動産",
        "section": "頻出の300語",
        "audio": "597.mp3"
    },
    {
        "id": 598,
        "no": "598",
        "en": "cafeteria",
        "ja": "社員食堂",
        "section": "頻出の300語",
        "audio": "598.mp3"
    },
    {
        "id": 599,
        "no": "599",
        "en": "statement",
        "ja": "明細書、声明",
        "section": "頻出の300語",
        "audio": "599.mp3"
    },
    {
        "id": 600,
        "no": "600",
        "en": "crew",
        "ja": "グループ、班、乗員",
        "section": "頻出の300語",
        "audio": "600.mp3"
    },
    {
        "id": 601,
        "no": "601",
        "en": "demonstrate",
        "ja": "実演する、明示する",
        "section": "頻出の300語",
        "audio": "601.mp3"
    },
    {
        "id": 602,
        "no": "602",
        "en": "efficient",
        "ja": "効率的な",
        "section": "頻出の300語",
        "audio": "602.mp3"
    },
    {
        "id": 603,
        "no": "603",
        "en": "overseas",
        "ja": "海外の、海外で",
        "section": "頻出の300語",
        "audio": "603.mp3"
    },
    {
        "id": 604,
        "no": "604",
        "en": "status",
        "ja": "状況、地位",
        "section": "頻出の300語",
        "audio": "604.mp3"
    },
    {
        "id": 605,
        "no": "605",
        "en": "establish",
        "ja": "設立する、創立する、確立する",
        "section": "頻出の300語",
        "audio": "605.mp3"
    },
    {
        "id": 606,
        "no": "606",
        "en": "regulation",
        "ja": "規制、規則",
        "section": "頻出の300語",
        "audio": "606.mp3"
    },
    {
        "id": 607,
        "no": "607",
        "en": "traditional",
        "ja": "伝統的な、昔のままの",
        "section": "頻出の300語",
        "audio": "607.mp3"
    },
    {
        "id": 608,
        "no": "608",
        "en": "deposit",
        "ja": "頭金、敷金、保証金、預け入れる",
        "section": "頻出の300語",
        "audio": "608.mp3"
    },
    {
        "id": 609,
        "no": "609",
        "en": "newly",
        "ja": "新しく",
        "section": "頻出の300語",
        "audio": "609.mp3"
    },
    {
        "id": 610,
        "no": "610",
        "en": "legal",
        "ja": "法律に関する、合法の",
        "section": "頻出の300語",
        "audio": "610.mp3"
    },
    {
        "id": 611,
        "no": "611",
        "en": "compete",
        "ja": "競う",
        "section": "頻出の300語",
        "audio": "611.mp3"
    },
    {
        "id": 612,
        "no": "612",
        "en": "mayor",
        "ja": "町長、市長",
        "section": "頻出の300語",
        "audio": "612.mp3"
    },
    {
        "id": 613,
        "no": "613",
        "en": "quantity",
        "ja": "量、数量",
        "section": "頻出の300語",
        "audio": "613.mp3"
    },
    {
        "id": 614,
        "no": "614",
        "en": "departure",
        "ja": "出発",
        "section": "頻出の300語",
        "audio": "614.mp3"
    },
    {
        "id": 615,
        "no": "615",
        "en": "wildlife",
        "ja": "野生動物",
        "section": "頻出の300語",
        "audio": "615.mp3"
    },
    {
        "id": 616,
        "no": "616",
        "en": "accompany",
        "ja": "同行する、付いてくる、伴奏する",
        "section": "頻出の300語",
        "audio": "616.mp3"
    },
    {
        "id": 617,
        "no": "617",
        "en": "average",
        "ja": "平均、平均的な",
        "section": "頻出の300語",
        "audio": "617.mp3"
    },
    {
        "id": 618,
        "no": "618",
        "en": "chart",
        "ja": "図表、一覧表",
        "section": "頻出の300語",
        "audio": "618.mp3"
    },
    {
        "id": 619,
        "no": "619",
        "en": "complaint",
        "ja": "苦情、クレーム",
        "section": "頻出の300語",
        "audio": "619.mp3"
    },
    {
        "id": 620,
        "no": "620",
        "en": "insurance",
        "ja": "保険",
        "section": "頻出の300語",
        "audio": "620.mp3"
    },
    {
        "id": 621,
        "no": "621",
        "en": "lecture",
        "ja": "講義",
        "section": "頻出の300語",
        "audio": "621.mp3"
    },
    {
        "id": 622,
        "no": "622",
        "en": "satisfied",
        "ja": "満足した",
        "section": "頻出の300語",
        "audio": "622.mp3"
    },
    {
        "id": 623,
        "no": "623",
        "en": "unique",
        "ja": "他にはない、独自の、特別な、特有の",
        "section": "頻出の300語",
        "audio": "623.mp3"
    },
    {
        "id": 624,
        "no": "624",
        "en": "guarantee",
        "ja": "保証する、保証",
        "section": "頻出の300語",
        "audio": "624.mp3"
    },
    {
        "id": 625,
        "no": "625",
        "en": "device",
        "ja": "機器、装置",
        "section": "頻出の300語",
        "audio": "625.mp3"
    },
    {
        "id": 626,
        "no": "626",
        "en": "entire",
        "ja": "全体の、全部の",
        "section": "頻出の300語",
        "audio": "626.mp3"
    },
    {
        "id": 627,
        "no": "627",
        "en": "exciting",
        "ja": "（人を）わくわくするさせる、興奮させる",
        "section": "頻出の300語",
        "audio": "627.mp3"
    },
    {
        "id": 628,
        "no": "628",
        "en": "ideal",
        "ja": "理想的な",
        "section": "頻出の300語",
        "audio": "628.mp3"
    },
    {
        "id": 629,
        "no": "629",
        "en": "industrial",
        "ja": "産業の",
        "section": "頻出の300語",
        "audio": "629.mp3"
    },
    {
        "id": 630,
        "no": "630",
        "en": "transfer",
        "ja": "転勤させる（する）、移動させる（する）、転勤、移動",
        "section": "頻出の300語",
        "audio": "630.mp3"
    },
    {
        "id": 631,
        "no": "631",
        "en": "agricultural",
        "ja": "農業の",
        "section": "頻出の300語",
        "audio": "631.mp3"
    },
    {
        "id": 632,
        "no": "632",
        "en": "edition",
        "ja": "（本、雑誌、新聞等の）版",
        "section": "頻出の300語",
        "audio": "632.mp3"
    },
    {
        "id": 633,
        "no": "633",
        "en": "historical",
        "ja": "歴史（上）の",
        "section": "頻出の300語",
        "audio": "633.mp3"
    },
    {
        "id": 634,
        "no": "634",
        "en": "preparation",
        "ja": "準備、用意",
        "section": "頻出の300語",
        "audio": "634.mp3"
    },
    {
        "id": 635,
        "no": "635",
        "en": "environment",
        "ja": "環境",
        "section": "頻出の300語",
        "audio": "635.mp3"
    },
    {
        "id": 636,
        "no": "636",
        "en": "growth",
        "ja": "成長",
        "section": "頻出の300語",
        "audio": "636.mp3"
    },
    {
        "id": 637,
        "no": "637",
        "en": "related",
        "ja": "関連した",
        "section": "頻出の300語",
        "audio": "637.mp3"
    },
    {
        "id": 638,
        "no": "638",
        "en": "temperature",
        "ja": "温度、気温",
        "section": "頻出の300語",
        "audio": "638.mp3"
    },
    {
        "id": 639,
        "no": "639",
        "en": "decade",
        "ja": "10年間、10年",
        "section": "頻出の300語",
        "audio": "639.mp3"
    },
    {
        "id": 640,
        "no": "640",
        "en": "frequent",
        "ja": "頻繁な、常連の",
        "section": "頻出の300語",
        "audio": "640.mp3"
    },
    {
        "id": 641,
        "no": "641",
        "en": "landscaping",
        "ja": "造園",
        "section": "頻出の300語",
        "audio": "641.mp3"
    },
    {
        "id": 642,
        "no": "642",
        "en": "significant",
        "ja": "かなりの、大幅な、重要な",
        "section": "頻出の300語",
        "audio": "642.mp3"
    },
    {
        "id": 643,
        "no": "643",
        "en": "task",
        "ja": "任務、業務、仕事",
        "section": "頻出の300語",
        "audio": "643.mp3"
    },
    {
        "id": 644,
        "no": "644",
        "en": "complex",
        "ja": "複合施設、集合住宅、複雑な",
        "section": "頻出の300語",
        "audio": "644.mp3"
    },
    {
        "id": 645,
        "no": "645",
        "en": "delighted",
        "ja": "とても喜んでいる",
        "section": "頻出の300語",
        "audio": "645.mp3"
    },
    {
        "id": 646,
        "no": "646",
        "en": "guided",
        "ja": "ガイド付きの",
        "section": "頻出の300語",
        "audio": "646.mp3"
    },
    {
        "id": 647,
        "no": "647",
        "en": "properly",
        "ja": "ちゃんと、適切に",
        "section": "頻出の300語",
        "audio": "647.mp3"
    },
    {
        "id": 648,
        "no": "648",
        "en": "scale",
        "ja": "規模、尺度、ハカリ",
        "section": "頻出の300語",
        "audio": "648.mp3"
    },
    {
        "id": 649,
        "no": "649",
        "en": "signature",
        "ja": "署名、特徴的な",
        "section": "頻出の300語",
        "audio": "649.mp3"
    },
    {
        "id": 650,
        "no": "650",
        "en": "entry",
        "ja": "エントリー（作品）、入場、入力",
        "section": "頻出の300語",
        "audio": "650.mp3"
    },
    {
        "id": 651,
        "no": "651",
        "en": "initial",
        "ja": "初めの、当初の、頭文字",
        "section": "頻出の300語",
        "audio": "651.mp3"
    },
    {
        "id": 652,
        "no": "652",
        "en": "inn",
        "ja": "宿、ホテル",
        "section": "頻出の300語",
        "audio": "652.mp3"
    },
    {
        "id": 653,
        "no": "653",
        "en": "renovate",
        "ja": "改装する",
        "section": "頻出の300語",
        "audio": "653.mp3"
    },
    {
        "id": 654,
        "no": "654",
        "en": "advanced",
        "ja": "進んだ、上級の、高度な",
        "section": "頻出の300語",
        "audio": "654.mp3"
    },
    {
        "id": 655,
        "no": "655",
        "en": "background",
        "ja": "経歴、背景",
        "section": "頻出の300語",
        "audio": "655.mp3"
    },
    {
        "id": 656,
        "no": "656",
        "en": "full-time",
        "ja": "常勤の、正社員の",
        "section": "頻出の300語",
        "audio": "656.mp3"
    },
    {
        "id": 657,
        "no": "657",
        "en": "graduate",
        "ja": "卒業する、卒業生",
        "section": "頻出の300語",
        "audio": "657.mp3"
    },
    {
        "id": 658,
        "no": "658",
        "en": "loan",
        "ja": "融資、貸付（金）、貸し付ける",
        "section": "頻出の300語",
        "audio": "658.mp3"
    },
    {
        "id": 659,
        "no": "659",
        "en": "recognize",
        "ja": "(人を）称える、（業績等を）認める、識別する",
        "section": "頻出の300語",
        "audio": "659.mp3"
    },
    {
        "id": 660,
        "no": "660",
        "en": "specific",
        "ja": "具体的な、特定の",
        "section": "頻出の300語",
        "audio": "660.mp3"
    },
    {
        "id": 661,
        "no": "661",
        "en": "alternative",
        "ja": "代わりの、代わりのもの",
        "section": "頻出の300語",
        "audio": "661.mp3"
    },
    {
        "id": 662,
        "no": "662",
        "en": "brief",
        "ja": "短時間の、手短な",
        "section": "頻出の300語",
        "audio": "662.mp3"
    },
    {
        "id": 663,
        "no": "663",
        "en": "definitely",
        "ja": "間違いなく、絶対に",
        "section": "頻出の300語",
        "audio": "663.mp3"
    },
    {
        "id": 664,
        "no": "664",
        "en": "emphasize",
        "ja": "強調する",
        "section": "頻出の300語",
        "audio": "664.mp3"
    },
    {
        "id": 665,
        "no": "665",
        "en": "fold",
        "ja": "折りたたむ",
        "section": "頻出の300語",
        "audio": "665.mp3"
    },
    {
        "id": 666,
        "no": "666",
        "en": "jewelry",
        "ja": "宝飾品、宝石類",
        "section": "頻出の300語",
        "audio": "666.mp3"
    },
    {
        "id": 667,
        "no": "667",
        "en": "appeal",
        "ja": "魅力がある、アピールする、魅力、アピール",
        "section": "頻出の300語",
        "audio": "667.mp3"
    },
    {
        "id": 668,
        "no": "668",
        "en": "chemical",
        "ja": "化学物質、化学品、化学の",
        "section": "頻出の300語",
        "audio": "668.mp3"
    },
    {
        "id": 669,
        "no": "669",
        "en": "concerning",
        "ja": "～に関する",
        "section": "頻出の300語",
        "audio": "669.mp3"
    },
    {
        "id": 670,
        "no": "670",
        "en": "decrease",
        "ja": "減る、減らす、減少、低下",
        "section": "頻出の300語",
        "audio": "670.mp3"
    },
    {
        "id": 671,
        "no": "671",
        "en": "sometime",
        "ja": "いつか",
        "section": "頻出の300語",
        "audio": "671.mp3"
    },
    {
        "id": 672,
        "no": "672",
        "en": "various",
        "ja": "さまざまな",
        "section": "頻出の300語",
        "audio": "672.mp3"
    },
    {
        "id": 673,
        "no": "673",
        "en": "venue",
        "ja": "会場",
        "section": "頻出の300語",
        "audio": "673.mp3"
    },
    {
        "id": 674,
        "no": "674",
        "en": "anniversary",
        "ja": "～周年、記念日",
        "section": "頻出の300語",
        "audio": "674.mp3"
    },
    {
        "id": 675,
        "no": "675",
        "en": "associate",
        "ja": "仲間、アシスタント、準、副、関連付ける",
        "section": "頻出の300語",
        "audio": "675.mp3"
    },
    {
        "id": 676,
        "no": "676",
        "en": "automatically",
        "ja": "自動的に",
        "section": "頻出の300語",
        "audio": "676.mp3"
    },
    {
        "id": 677,
        "no": "677",
        "en": "confident",
        "ja": "確信している、自信がある",
        "section": "頻出の300語",
        "audio": "677.mp3"
    },
    {
        "id": 678,
        "no": "678",
        "en": "outstanding",
        "ja": "抜きん出た、未払いの",
        "section": "頻出の300語",
        "audio": "678.mp3"
    },
    {
        "id": 679,
        "no": "679",
        "en": "overall",
        "ja": "全体の、全体として",
        "section": "頻出の300語",
        "audio": "679.mp3"
    },
    {
        "id": 680,
        "no": "680",
        "en": "reputation",
        "ja": "評判",
        "section": "頻出の300語",
        "audio": "680.mp3"
    },
    {
        "id": 681,
        "no": "681",
        "en": "achieve",
        "ja": "達成する",
        "section": "頻出の300語",
        "audio": "681.mp3"
    },
    {
        "id": 682,
        "no": "682",
        "en": "diet",
        "ja": "食事、食べ物、ダイエット",
        "section": "頻出の300語",
        "audio": "682.mp3"
    },
    {
        "id": 683,
        "no": "683",
        "en": "explore",
        "ja": "調査する、探索する、散策する",
        "section": "頻出の300語",
        "audio": "683.mp3"
    },
    {
        "id": 684,
        "no": "684",
        "en": "grant",
        "ja": "補助金、助成金、与える、許可する",
        "section": "頻出の300語",
        "audio": "684.mp3"
    },
    {
        "id": 685,
        "no": "685",
        "en": "particularly",
        "ja": "特に",
        "section": "頻出の300語",
        "audio": "685.mp3"
    },
    {
        "id": 686,
        "no": "686",
        "en": "suitable",
        "ja": "ふさわしい、適切な",
        "section": "頻出の300語",
        "audio": "686.mp3"
    },
    {
        "id": 687,
        "no": "687",
        "en": "appropriate",
        "ja": "適切な、適した",
        "section": "頻出の300語",
        "audio": "687.mp3"
    },
    {
        "id": 688,
        "no": "688",
        "en": "assure",
        "ja": "保証する、請け合う",
        "section": "頻出の300語",
        "audio": "688.mp3"
    },
    {
        "id": 689,
        "no": "689",
        "en": "decline",
        "ja": "（丁寧に）断る、下降する、下降",
        "section": "頻出の300語",
        "audio": "689.mp3"
    },
    {
        "id": 690,
        "no": "690",
        "en": "decorate",
        "ja": "飾る",
        "section": "頻出の300語",
        "audio": "690.mp3"
    },
    {
        "id": 691,
        "no": "691",
        "en": "minimum",
        "ja": "最低限、最小限、最低限の、最小限の",
        "section": "頻出の300語",
        "audio": "691.mp3"
    },
    {
        "id": 692,
        "no": "692",
        "en": "source",
        "ja": "源",
        "section": "頻出の300語",
        "audio": "692.mp3"
    },
    {
        "id": 693,
        "no": "693",
        "en": "basis",
        "ja": "ベース、基準、根拠",
        "section": "頻出の300語",
        "audio": "693.mp3"
    },
    {
        "id": 694,
        "no": "694",
        "en": "challenge",
        "ja": "（やりがいのある）困難、試練、異議を唱える",
        "section": "頻出の300語",
        "audio": "694.mp3"
    },
    {
        "id": 695,
        "no": "695",
        "en": "observe",
        "ja": "気付く、順守する、観察する",
        "section": "頻出の300語",
        "audio": "695.mp3"
    },
    {
        "id": 696,
        "no": "696",
        "en": "occur",
        "ja": "起こる、発生する、行われる",
        "section": "頻出の300語",
        "audio": "696.mp3"
    },
    {
        "id": 697,
        "no": "697",
        "en": "overnight",
        "ja": "一晩の、翌日配送の、一晩",
        "section": "頻出の300語",
        "audio": "697.mp3"
    },
    {
        "id": 698,
        "no": "698",
        "en": "simply",
        "ja": "単純に、単に",
        "section": "頻出の300語",
        "audio": "698.mp3"
    },
    {
        "id": 699,
        "no": "699",
        "en": "aspect",
        "ja": "面、局面",
        "section": "頻出の300語",
        "audio": "699.mp3"
    },
    {
        "id": 700,
        "no": "700",
        "en": "athletic",
        "ja": "運動の、運動が得意な、アスリートの",
        "section": "頻出の300語",
        "audio": "700.mp3"
    },
    {
        "id": 701,
        "no": "701",
        "en": "forecast",
        "ja": "予想、予測、予想する、予測する",
        "section": "必須の200語",
        "audio": "701.mp3"
    },
    {
        "id": 702,
        "no": "702",
        "en": "generous",
        "ja": "寛大な、気前のよい",
        "section": "必須の200語",
        "audio": "702.mp3"
    },
    {
        "id": 703,
        "no": "703",
        "en": "involved",
        "ja": "関わった",
        "section": "必須の200語",
        "audio": "703.mp3"
    },
    {
        "id": 704,
        "no": "704",
        "en": "shortly",
        "ja": "じきに、まもなく",
        "section": "必須の200語",
        "audio": "704.mp3"
    },
    {
        "id": 705,
        "no": "705",
        "en": "economic",
        "ja": "経済の、経済上の",
        "section": "必須の200語",
        "audio": "705.mp3"
    },
    {
        "id": 706,
        "no": "706",
        "en": "novel",
        "ja": "小説",
        "section": "必須の200語",
        "audio": "706.mp3"
    },
    {
        "id": 707,
        "no": "707",
        "en": "accurate",
        "ja": "正確な",
        "section": "必須の200語",
        "audio": "707.mp3"
    },
    {
        "id": 708,
        "no": "708",
        "en": "combine",
        "ja": "一つにまとめる、組み合わせる、併用する",
        "section": "必須の200語",
        "audio": "708.mp3"
    },
    {
        "id": 709,
        "no": "709",
        "en": "finding",
        "ja": "(研究・調査の)結果、わかったこと",
        "section": "必須の200語",
        "audio": "709.mp3"
    },
    {
        "id": 710,
        "no": "710",
        "en": "hesitate",
        "ja": "ためらう",
        "section": "必須の200語",
        "audio": "710.mp3"
    },
    {
        "id": 711,
        "no": "711",
        "en": "situation",
        "ja": "状況",
        "section": "必須の200語",
        "audio": "711.mp3"
    },
    {
        "id": 712,
        "no": "712",
        "en": "recognition",
        "ja": "認知、認識、称賛",
        "section": "必須の200語",
        "audio": "712.mp3"
    },
    {
        "id": 713,
        "no": "713",
        "en": "diner",
        "ja": "食事客",
        "section": "必須の200語",
        "audio": "713.mp3"
    },
    {
        "id": 714,
        "no": "714",
        "en": "institution",
        "ja": "機関、団体、しきたり",
        "section": "必須の200語",
        "audio": "714.mp3"
    },
    {
        "id": 715,
        "no": "715",
        "en": "neighborhood",
        "ja": "（市や町の特定の）地域",
        "section": "必須の200語",
        "audio": "715.mp3"
    },
    {
        "id": 716,
        "no": "716",
        "en": "represent",
        "ja": "代表を務める、相当する、表す",
        "section": "必須の200語",
        "audio": "716.mp3"
    },
    {
        "id": 717,
        "no": "717",
        "en": "saving",
        "ja": "値引き、貯蓄、節約",
        "section": "必須の200語",
        "audio": "717.mp3"
    },
    {
        "id": 718,
        "no": "718",
        "en": "monitor",
        "ja": "監視する、（コンピュータの）モニター",
        "section": "必須の200語",
        "audio": "718.mp3"
    },
    {
        "id": 719,
        "no": "719",
        "en": "locate",
        "ja": "見つける",
        "section": "必須の200語",
        "audio": "719.mp3"
    },
    {
        "id": 720,
        "no": "720",
        "en": "proceed",
        "ja": "進む、進める",
        "section": "必須の200語",
        "audio": "720.mp3"
    },
    {
        "id": 721,
        "no": "721",
        "en": "regularly",
        "ja": "定期的に、頻繁に",
        "section": "必須の200語",
        "audio": "721.mp3"
    },
    {
        "id": 722,
        "no": "722",
        "en": "secure",
        "ja": "しっかり固定する、（努力で）確保する、得る、安全な",
        "section": "必須の200語",
        "audio": "722.mp3"
    },
    {
        "id": 723,
        "no": "723",
        "en": "via",
        "ja": "～経由で、（～という手段）によって",
        "section": "必須の200語",
        "audio": "723.mp3"
    },
    {
        "id": 724,
        "no": "724",
        "en": "crop",
        "ja": "作物、収穫量",
        "section": "必須の200語",
        "audio": "724.mp3"
    },
    {
        "id": 725,
        "no": "725",
        "en": "deserve",
        "ja": "値する",
        "section": "必須の200語",
        "audio": "725.mp3"
    },
    {
        "id": 726,
        "no": "726",
        "en": "identify",
        "ja": "特定する",
        "section": "必須の200語",
        "audio": "726.mp3"
    },
    {
        "id": 727,
        "no": "727",
        "en": "impact",
        "ja": "影響",
        "section": "必須の200語",
        "audio": "727.mp3"
    },
    {
        "id": 728,
        "no": "728",
        "en": "loss",
        "ja": "損失、喪失、紛失",
        "section": "必須の200語",
        "audio": "728.mp3"
    },
    {
        "id": 729,
        "no": "729",
        "en": "regret",
        "ja": "残念に思う、後悔する、後悔",
        "section": "必須の200語",
        "audio": "729.mp3"
    },
    {
        "id": 730,
        "no": "730",
        "en": "social",
        "ja": "社交の、交流の、社会の",
        "section": "必須の200語",
        "audio": "730.mp3"
    },
    {
        "id": 731,
        "no": "731",
        "en": "treat",
        "ja": "扱う、対応する、治療する",
        "section": "必須の200語",
        "audio": "731.mp3"
    },
    {
        "id": 732,
        "no": "732",
        "en": "amazing",
        "ja": "驚くべき、驚くほど素晴らしい、すごい",
        "section": "必須の200語",
        "audio": "732.mp3"
    },
    {
        "id": 733,
        "no": "733",
        "en": "capacity",
        "ja": "収容能力、能力、役割",
        "section": "必須の200語",
        "audio": "733.mp3"
    },
    {
        "id": 734,
        "no": "734",
        "en": "draft",
        "ja": "原稿、ドラフト、たたき台",
        "section": "必須の200語",
        "audio": "734.mp3"
    },
    {
        "id": 735,
        "no": "735",
        "en": "household",
        "ja": "家庭用の、家庭",
        "section": "必須の200語",
        "audio": "735.mp3"
    },
    {
        "id": 736,
        "no": "736",
        "en": "outline",
        "ja": "概要を説明する、概要",
        "section": "必須の200語",
        "audio": "736.mp3"
    },
    {
        "id": 737,
        "no": "737",
        "en": "academic",
        "ja": "学問の、（大学）教育の",
        "section": "必須の200語",
        "audio": "737.mp3"
    },
    {
        "id": 738,
        "no": "738",
        "en": "afford",
        "ja": "～する（お金や時間の）余裕がある",
        "section": "必須の200語",
        "audio": "738.mp3"
    },
    {
        "id": 739,
        "no": "739",
        "en": "aircraft",
        "ja": "航空機",
        "section": "必須の200語",
        "audio": "739.mp3"
    },
    {
        "id": 740,
        "no": "740",
        "en": "extremely",
        "ja": "極めて、非常に",
        "section": "必須の200語",
        "audio": "740.mp3"
    },
    {
        "id": 741,
        "no": "741",
        "en": "mostly",
        "ja": "主に、ほとんど、たいてい",
        "section": "必須の200語",
        "audio": "741.mp3"
    },
    {
        "id": 742,
        "no": "742",
        "en": "permanent",
        "ja": "常設の、常雇用の、永久の",
        "section": "必須の200語",
        "audio": "742.mp3"
    },
    {
        "id": 743,
        "no": "743",
        "en": "reflect",
        "ja": "反映する、（像が）映る",
        "section": "必須の200語",
        "audio": "743.mp3"
    },
    {
        "id": 744,
        "no": "744",
        "en": "structure",
        "ja": "構造、建造物",
        "section": "必須の200語",
        "audio": "744.mp3"
    },
    {
        "id": 745,
        "no": "745",
        "en": "surface",
        "ja": "表面",
        "section": "必須の200語",
        "audio": "745.mp3"
    },
    {
        "id": 746,
        "no": "746",
        "en": "acquire",
        "ja": "買収する、得る、獲得する",
        "section": "必須の200語",
        "audio": "746.mp3"
    },
    {
        "id": 747,
        "no": "747",
        "en": "cooperation",
        "ja": "協力",
        "section": "必須の200語",
        "audio": "747.mp3"
    },
    {
        "id": 748,
        "no": "748",
        "en": "enable",
        "ja": "可能にする",
        "section": "必須の200語",
        "audio": "748.mp3"
    },
    {
        "id": 749,
        "no": "749",
        "en": "factor",
        "ja": "要因、要素",
        "section": "必須の200語",
        "audio": "749.mp3"
    },
    {
        "id": 750,
        "no": "750",
        "en": "priority",
        "ja": "優先順位、優先事項",
        "section": "必須の200語",
        "audio": "750.mp3"
    },
    {
        "id": 751,
        "no": "751",
        "en": "recall",
        "ja": "回収する、思い出す、回収",
        "section": "必須の200語",
        "audio": "751.mp3"
    },
    {
        "id": 752,
        "no": "752",
        "en": "remark",
        "ja": "（スピーチでの）言葉、コメント、意見、コメントする",
        "section": "必須の200語",
        "audio": "752.mp3"
    },
    {
        "id": 753,
        "no": "753",
        "en": "failure",
        "ja": "失敗、不具合",
        "section": "必須の200語",
        "audio": "753.mp3"
    },
    {
        "id": 754,
        "no": "754",
        "en": "income",
        "ja": "収入",
        "section": "必須の200語",
        "audio": "754.mp3"
    },
    {
        "id": 755,
        "no": "755",
        "en": "loyal",
        "ja": "忠実な",
        "section": "必須の200語",
        "audio": "755.mp3"
    },
    {
        "id": 756,
        "no": "756",
        "en": "setting",
        "ja": "環境、設定",
        "section": "必須の200語",
        "audio": "756.mp3"
    },
    {
        "id": 757,
        "no": "757",
        "en": "analyze",
        "ja": "分析する",
        "section": "必須の200語",
        "audio": "757.mp3"
    },
    {
        "id": 758,
        "no": "758",
        "en": "ancient",
        "ja": "古代の",
        "section": "必須の200語",
        "audio": "758.mp3"
    },
    {
        "id": 759,
        "no": "759",
        "en": "calculate",
        "ja": "計算する",
        "section": "必須の200語",
        "audio": "759.mp3"
    },
    {
        "id": 760,
        "no": "760",
        "en": "mechanical",
        "ja": "機械の",
        "section": "必須の200語",
        "audio": "760.mp3"
    },
    {
        "id": 761,
        "no": "761",
        "en": "popularity",
        "ja": "人気",
        "section": "必須の200語",
        "audio": "761.mp3"
    },
    {
        "id": 762,
        "no": "762",
        "en": "promising",
        "ja": "有望な",
        "section": "必須の200語",
        "audio": "762.mp3"
    },
    {
        "id": 763,
        "no": "763",
        "en": "restore",
        "ja": "復旧させる、取り戻す、修復する",
        "section": "必須の200語",
        "audio": "763.mp3"
    },
    {
        "id": 764,
        "no": "764",
        "en": "appoint",
        "ja": "指名する、任命する",
        "section": "必須の200語",
        "audio": "764.mp3"
    },
    {
        "id": 765,
        "no": "765",
        "en": "connection",
        "ja": "接続、つながり、関連、乗り継ぎ",
        "section": "必須の200語",
        "audio": "765.mp3"
    },
    {
        "id": 766,
        "no": "766",
        "en": "labor",
        "ja": "労働、労働者",
        "section": "必須の200語",
        "audio": "766.mp3"
    },
    {
        "id": 767,
        "no": "767",
        "en": "relationship",
        "ja": "関係",
        "section": "必須の200語",
        "audio": "767.mp3"
    },
    {
        "id": 768,
        "no": "768",
        "en": "sufficient",
        "ja": "十分な",
        "section": "必須の200語",
        "audio": "768.mp3"
    },
    {
        "id": 769,
        "no": "769",
        "en": "surround",
        "ja": "取り囲む、取り巻く",
        "section": "必須の200語",
        "audio": "769.mp3"
    },
    {
        "id": 770,
        "no": "770",
        "en": "weekday",
        "ja": "平日",
        "section": "必須の200語",
        "audio": "770.mp3"
    },
    {
        "id": 771,
        "no": "771",
        "en": "commission",
        "ja": "委員会、歩合、委託する、委任する",
        "section": "必須の200語",
        "audio": "771.mp3"
    },
    {
        "id": 772,
        "no": "772",
        "en": "committed",
        "ja": "熱心に取り組む、献身的な",
        "section": "必須の200語",
        "audio": "772.mp3"
    },
    {
        "id": 773,
        "no": "773",
        "en": "enjoyable",
        "ja": "楽しい",
        "section": "必須の200語",
        "audio": "773.mp3"
    },
    {
        "id": 774,
        "no": "774",
        "en": "relatively",
        "ja": "比較的、他と比べて",
        "section": "必須の200語",
        "audio": "774.mp3"
    },
    {
        "id": 775,
        "no": "775",
        "en": "resource",
        "ja": "資源",
        "section": "必須の200語",
        "audio": "775.mp3"
    },
    {
        "id": 776,
        "no": "776",
        "en": "alike",
        "ja": "同様に、よく似た",
        "section": "必須の200語",
        "audio": "776.mp3"
    },
    {
        "id": 777,
        "no": "777",
        "en": "attempt",
        "ja": "試みる、試み",
        "section": "必須の200語",
        "audio": "777.mp3"
    },
    {
        "id": 778,
        "no": "778",
        "en": "function",
        "ja": "機能、機能する",
        "section": "必須の200語",
        "audio": "778.mp3"
    },
    {
        "id": 779,
        "no": "779",
        "en": "reward",
        "ja": "報いる、ほうびを与える、報酬、ほうび",
        "section": "必須の200語",
        "audio": "779.mp3"
    },
    {
        "id": 780,
        "no": "780",
        "en": "steady",
        "ja": "着実な、安定した",
        "section": "必須の200語",
        "audio": "780.mp3"
    },
    {
        "id": 781,
        "no": "781",
        "en": "absolutely",
        "ja": "完全に、間違いなく、もちろん",
        "section": "必須の200語",
        "audio": "781.mp3"
    },
    {
        "id": 782,
        "no": "782",
        "en": "atmosphere",
        "ja": "雰囲気",
        "section": "必須の200語",
        "audio": "782.mp3"
    },
    {
        "id": 783,
        "no": "783",
        "en": "comparison",
        "ja": "比較",
        "section": "必須の200語",
        "audio": "783.mp3"
    },
    {
        "id": 784,
        "no": "784",
        "en": "component",
        "ja": "部品",
        "section": "必須の200語",
        "audio": "784.mp3"
    },
    {
        "id": 785,
        "no": "785",
        "en": "contrast",
        "ja": "対照、はっきりした違い、対照的である",
        "section": "必須の200語",
        "audio": "785.mp3"
    },
    {
        "id": 786,
        "no": "786",
        "en": "enthusiastic",
        "ja": "熱心な、関心が高い、乗り気である",
        "section": "必須の200語",
        "audio": "786.mp3"
    },
    {
        "id": 787,
        "no": "787",
        "en": "laundry",
        "ja": "洗濯（物）",
        "section": "必須の200語",
        "audio": "787.mp3"
    },
    {
        "id": 788,
        "no": "788",
        "en": "occasionally",
        "ja": "時々、たまに",
        "section": "必須の200語",
        "audio": "788.mp3"
    },
    {
        "id": 789,
        "no": "789",
        "en": "preserve",
        "ja": "保護する、保存する、保護区",
        "section": "必須の200語",
        "audio": "789.mp3"
    },
    {
        "id": 790,
        "no": "790",
        "en": "retain",
        "ja": "保持する、維持する、保管する",
        "section": "必須の200語",
        "audio": "790.mp3"
    },
    {
        "id": 791,
        "no": "791",
        "en": "scholarship",
        "ja": "奨学金",
        "section": "必須の200語",
        "audio": "791.mp3"
    },
    {
        "id": 792,
        "no": "792",
        "en": "ease",
        "ja": "容易さ、たやすさ、やわらげる、容易にする",
        "section": "必須の200語",
        "audio": "792.mp3"
    },
    {
        "id": 793,
        "no": "793",
        "en": "elect",
        "ja": "選出する",
        "section": "必須の200語",
        "audio": "793.mp3"
    },
    {
        "id": 794,
        "no": "794",
        "en": "import",
        "ja": "輸入する、輸入、輸入品",
        "section": "必須の200語",
        "audio": "794.mp3"
    },
    {
        "id": 795,
        "no": "795",
        "en": "informal",
        "ja": "非公式の、カジュアルな",
        "section": "必須の200語",
        "audio": "795.mp3"
    },
    {
        "id": 796,
        "no": "796",
        "en": "population",
        "ja": "人口",
        "section": "必須の200語",
        "audio": "796.mp3"
    },
    {
        "id": 797,
        "no": "797",
        "en": "profession",
        "ja": "専門的職業",
        "section": "必須の200語",
        "audio": "797.mp3"
    },
    {
        "id": 798,
        "no": "798",
        "en": "relief",
        "ja": "安心感、（苦痛・悩み等の）緩和",
        "section": "必須の200語",
        "audio": "798.mp3"
    },
    {
        "id": 799,
        "no": "799",
        "en": "slightly",
        "ja": "わずかに、少し",
        "section": "必須の200語",
        "audio": "799.mp3"
    },
    {
        "id": 800,
        "no": "800",
        "en": "conflict",
        "ja": "衝突、対立",
        "section": "必須の200語",
        "audio": "800.mp3"
    },
    {
        "id": 801,
        "no": "801",
        "en": "emergency",
        "ja": "緊急事態",
        "section": "必須の200語",
        "audio": "801.mp3"
    },
    {
        "id": 802,
        "no": "802",
        "en": "inspire",
        "ja": "触発する、鼓舞する",
        "section": "必須の200語",
        "audio": "802.mp3"
    },
    {
        "id": 803,
        "no": "803",
        "en": "measurement",
        "ja": "測定、サイズ",
        "section": "必須の200語",
        "audio": "803.mp3"
    },
    {
        "id": 804,
        "no": "804",
        "en": "thorough",
        "ja": "徹底的な",
        "section": "必須の200語",
        "audio": "804.mp3"
    },
    {
        "id": 805,
        "no": "805",
        "en": "domestic",
        "ja": "国内の",
        "section": "必須の200語",
        "audio": "805.mp3"
    },
    {
        "id": 806,
        "no": "806",
        "en": "fairly",
        "ja": "かなり",
        "section": "必須の200語",
        "audio": "806.mp3"
    },
    {
        "id": 807,
        "no": "807",
        "en": "rapidly",
        "ja": "急速に",
        "section": "必須の200語",
        "audio": "807.mp3"
    },
    {
        "id": 808,
        "no": "808",
        "en": "typical",
        "ja": "典型的な、通常の",
        "section": "必須の200語",
        "audio": "808.mp3"
    },
    {
        "id": 809,
        "no": "809",
        "en": "favorable",
        "ja": "好意的な、有利な",
        "section": "必須の200語",
        "audio": "809.mp3"
    },
    {
        "id": 810,
        "no": "810",
        "en": "timely",
        "ja": "タイミングの良い、タイムリーな",
        "section": "必須の200語",
        "audio": "810.mp3"
    },
    {
        "id": 811,
        "no": "811",
        "en": "closely",
        "ja": "密に、注意深く",
        "section": "必須の200語",
        "audio": "811.mp3"
    },
    {
        "id": 812,
        "no": "812",
        "en": "eager",
        "ja": "～したがる、熱望する",
        "section": "必須の200語",
        "audio": "812.mp3"
    },
    {
        "id": 813,
        "no": "813",
        "en": "equally",
        "ja": "同じように、均等に",
        "section": "必須の200語",
        "audio": "813.mp3"
    },
    {
        "id": 814,
        "no": "814",
        "en": "stress",
        "ja": "強調する、ストレス、強調",
        "section": "必須の200語",
        "audio": "814.mp3"
    },
    {
        "id": 815,
        "no": "815",
        "en": "shipping",
        "ja": "配送、出荷",
        "section": "必須の200語",
        "audio": "815.mp3"
    },
    {
        "id": 816,
        "no": "816",
        "en": "reservation",
        "ja": "予約、懸念",
        "section": "必須の200語",
        "audio": "816.mp3"
    },
    {
        "id": 817,
        "no": "817",
        "en": "facility",
        "ja": "施設",
        "section": "必須の200語",
        "audio": "817.mp3"
    },
    {
        "id": 818,
        "no": "818",
        "en": "advertising",
        "ja": "広告（業）、宣伝（活動）",
        "section": "必須の200語",
        "audio": "818.mp3"
    },
    {
        "id": 819,
        "no": "819",
        "en": "workshop",
        "ja": "研修会、講習会、作業場",
        "section": "必須の200語",
        "audio": "819.mp3"
    },
    {
        "id": 820,
        "no": "820",
        "en": "currently",
        "ja": "現在",
        "section": "必須の200語",
        "audio": "820.mp3"
    },
    {
        "id": 821,
        "no": "821",
        "en": "install",
        "ja": "設置する、導入する",
        "section": "必須の200語",
        "audio": "821.mp3"
    },
    {
        "id": 822,
        "no": "822",
        "en": "candidate",
        "ja": "候補者",
        "section": "必須の200語",
        "audio": "822.mp3"
    },
    {
        "id": 823,
        "no": "823",
        "en": "register",
        "ja": "登録する、レジ",
        "section": "必須の200語",
        "audio": "823.mp3"
    },
    {
        "id": 824,
        "no": "824",
        "en": "deadline",
        "ja": "締め切り、期限",
        "section": "必須の200語",
        "audio": "824.mp3"
    },
    {
        "id": 825,
        "no": "825",
        "en": "executive",
        "ja": "重役、重役（用）の、高級な",
        "section": "必須の200語",
        "audio": "825.mp3"
    },
    {
        "id": 826,
        "no": "826",
        "en": "rental",
        "ja": "賃貸の、レンタルの、賃貸借（料）",
        "section": "必須の200語",
        "audio": "826.mp3"
    },
    {
        "id": 827,
        "no": "827",
        "en": "colleague",
        "ja": "同僚",
        "section": "必須の200語",
        "audio": "827.mp3"
    },
    {
        "id": 828,
        "no": "828",
        "en": "manufacturer",
        "ja": "メーカー、製造業者",
        "section": "必須の200語",
        "audio": "828.mp3"
    },
    {
        "id": 829,
        "no": "829",
        "en": "participate",
        "ja": "参加する",
        "section": "必須の200語",
        "audio": "829.mp3"
    },
    {
        "id": 830,
        "no": "830",
        "en": "laboratory",
        "ja": "研究所、実験室",
        "section": "必須の200語",
        "audio": "830.mp3"
    },
    {
        "id": 831,
        "no": "831",
        "en": "memo",
        "ja": "社内文書",
        "section": "必須の200語",
        "audio": "831.mp3"
    },
    {
        "id": 832,
        "no": "832",
        "en": "specialize",
        "ja": "専門とする",
        "section": "必須の200語",
        "audio": "832.mp3"
    },
    {
        "id": 833,
        "no": "833",
        "en": "ensure",
        "ja": "保証する、請け合う",
        "section": "必須の200語",
        "audio": "833.mp3"
    },
    {
        "id": 834,
        "no": "834",
        "en": "consumer",
        "ja": "消費者",
        "section": "必須の200語",
        "audio": "834.mp3"
    },
    {
        "id": 835,
        "no": "835",
        "en": "inquire",
        "ja": "尋ねる、問い合わせる",
        "section": "必須の200語",
        "audio": "835.mp3"
    },
    {
        "id": 836,
        "no": "836",
        "en": "headquarters",
        "ja": "本社",
        "section": "必須の200語",
        "audio": "836.mp3"
    },
    {
        "id": 837,
        "no": "837",
        "en": "strategy",
        "ja": "戦略",
        "section": "必須の200語",
        "audio": "837.mp3"
    },
    {
        "id": 838,
        "no": "838",
        "en": "architect",
        "ja": "建築家",
        "section": "必須の200語",
        "audio": "838.mp3"
    },
    {
        "id": 839,
        "no": "839",
        "en": "promotional",
        "ja": "販売促進用の、販促の",
        "section": "必須の200語",
        "audio": "839.mp3"
    },
    {
        "id": 840,
        "no": "840",
        "en": "sculpture",
        "ja": "彫刻",
        "section": "必須の200語",
        "audio": "840.mp3"
    },
    {
        "id": 841,
        "no": "841",
        "en": "assembly",
        "ja": "組立、集会",
        "section": "必須の200語",
        "audio": "841.mp3"
    },
    {
        "id": 842,
        "no": "842",
        "en": "assign",
        "ja": "割り当てる、任せる",
        "section": "必須の200語",
        "audio": "842.mp3"
    },
    {
        "id": 843,
        "no": "843",
        "en": "relocate",
        "ja": "移転させる、引っ越す",
        "section": "必須の200語",
        "audio": "843.mp3"
    },
    {
        "id": 844,
        "no": "844",
        "en": "renew",
        "ja": "更新する",
        "section": "必須の200語",
        "audio": "844.mp3"
    },
    {
        "id": 845,
        "no": "845",
        "en": "patron",
        "ja": "愛用者、利用者",
        "section": "必須の200語",
        "audio": "845.mp3"
    },
    {
        "id": 846,
        "no": "846",
        "en": "contribute",
        "ja": "貢献する、寄付する",
        "section": "必須の200語",
        "audio": "846.mp3"
    },
    {
        "id": 847,
        "no": "847",
        "en": "guideline",
        "ja": "指針、ガイドライン",
        "section": "必須の200語",
        "audio": "847.mp3"
    },
    {
        "id": 848,
        "no": "848",
        "en": "recruit",
        "ja": "採用する、募集する、新人",
        "section": "必須の200語",
        "audio": "848.mp3"
    },
    {
        "id": 849,
        "no": "849",
        "en": "grocery",
        "ja": "食品雑貨",
        "section": "必須の200語",
        "audio": "849.mp3"
    },
    {
        "id": 850,
        "no": "850",
        "en": "inspect",
        "ja": "検査する",
        "section": "必須の200語",
        "audio": "850.mp3"
    },
    {
        "id": 851,
        "no": "851",
        "en": "exceed",
        "ja": "超える",
        "section": "必須の200語",
        "audio": "851.mp3"
    },
    {
        "id": 852,
        "no": "852",
        "en": "extensive",
        "ja": "詳細な、幅広い、大規模な",
        "section": "必須の200語",
        "audio": "852.mp3"
    },
    {
        "id": 853,
        "no": "853",
        "en": "remodel",
        "ja": "改築する、リフォームする",
        "section": "必須の200語",
        "audio": "853.mp3"
    },
    {
        "id": 854,
        "no": "854",
        "en": "on-site",
        "ja": "社内の、その場の、その場で",
        "section": "必須の200語",
        "audio": "854.mp3"
    },
    {
        "id": 855,
        "no": "855",
        "en": "productivity",
        "ja": "生産性",
        "section": "必須の200語",
        "audio": "855.mp3"
    },
    {
        "id": 856,
        "no": "856",
        "en": "protective",
        "ja": "防護用の",
        "section": "必須の200語",
        "audio": "856.mp3"
    },
    {
        "id": 857,
        "no": "857",
        "en": "worldwide",
        "ja": "世界中で、世界中の",
        "section": "必須の200語",
        "audio": "857.mp3"
    },
    {
        "id": 858,
        "no": "858",
        "en": "anticipate",
        "ja": "予期する、待ち望む",
        "section": "必須の200語",
        "audio": "858.mp3"
    },
    {
        "id": 859,
        "no": "859",
        "en": "contemporary",
        "ja": "現代の",
        "section": "必須の200語",
        "audio": "859.mp3"
    },
    {
        "id": 860,
        "no": "860",
        "en": "finalize",
        "ja": "取りまとめる、仕上げる、最終決定する",
        "section": "必須の200語",
        "audio": "860.mp3"
    },
    {
        "id": 861,
        "no": "861",
        "en": "multiple",
        "ja": "複数の",
        "section": "必須の200語",
        "audio": "861.mp3"
    },
    {
        "id": 862,
        "no": "862",
        "en": "negotiate",
        "ja": "交渉する",
        "section": "必須の200語",
        "audio": "862.mp3"
    },
    {
        "id": 863,
        "no": "863",
        "en": "numerous",
        "ja": "数多くの",
        "section": "必須の200語",
        "audio": "863.mp3"
    },
    {
        "id": 864,
        "no": "864",
        "en": "sightseeing",
        "ja": "観光",
        "section": "必須の200語",
        "audio": "864.mp3"
    },
    {
        "id": 865,
        "no": "865",
        "en": "consult",
        "ja": "（医者、弁護士等の専門家に）相談する",
        "section": "必須の200語",
        "audio": "865.mp3"
    },
    {
        "id": 866,
        "no": "866",
        "en": "highlight",
        "ja": "強調する、見どころ",
        "section": "必須の200語",
        "audio": "866.mp3"
    },
    {
        "id": 867,
        "no": "867",
        "en": "competitive",
        "ja": "他に負けない、競争の激しい",
        "section": "必須の200語",
        "audio": "867.mp3"
    },
    {
        "id": 868,
        "no": "868",
        "en": "evaluate",
        "ja": "評価する",
        "section": "必須の200語",
        "audio": "868.mp3"
    },
    {
        "id": 869,
        "no": "869",
        "en": "profile",
        "ja": "プロフィールを紹介する",
        "section": "必須の200語",
        "audio": "869.mp3"
    },
    {
        "id": 870,
        "no": "870",
        "en": "shuttle",
        "ja": "定期往復便",
        "section": "必須の200語",
        "audio": "870.mp3"
    },
    {
        "id": 871,
        "no": "871",
        "en": "approximately",
        "ja": "おおよそ、約",
        "section": "必須の200語",
        "audio": "871.mp3"
    },
    {
        "id": 872,
        "no": "872",
        "en": "preference",
        "ja": "好み、希望",
        "section": "必須の200語",
        "audio": "872.mp3"
    },
    {
        "id": 873,
        "no": "873",
        "en": "talented",
        "ja": "才能のある",
        "section": "必須の200語",
        "audio": "873.mp3"
    },
    {
        "id": 874,
        "no": "874",
        "en": "flyer",
        "ja": "チラシ",
        "section": "必須の200語",
        "audio": "874.mp3"
    },
    {
        "id": 875,
        "no": "875",
        "en": "phase",
        "ja": "段階",
        "section": "必須の200語",
        "audio": "875.mp3"
    },
    {
        "id": 876,
        "no": "876",
        "en": "substantial",
        "ja": "かなりの、頑丈な",
        "section": "必須の200語",
        "audio": "876.mp3"
    },
    {
        "id": 877,
        "no": "877",
        "en": "encounter",
        "ja": "（問題や困難に）直面する、遭う、出くわす",
        "section": "必須の200語",
        "audio": "877.mp3"
    },
    {
        "id": 878,
        "no": "878",
        "en": "flexible",
        "ja": "柔軟な、フレキシブルな",
        "section": "必須の200語",
        "audio": "878.mp3"
    },
    {
        "id": 879,
        "no": "879",
        "en": "predict",
        "ja": "予想する、予測する、予言する",
        "section": "必須の200語",
        "audio": "879.mp3"
    },
    {
        "id": 880,
        "no": "880",
        "en": "undergo",
        "ja": "（検査、修理等を）経験する、受ける",
        "section": "必須の200語",
        "audio": "880.mp3"
    },
    {
        "id": 881,
        "no": "881",
        "en": "belongings",
        "ja": "所持品、所有物",
        "section": "必須の200語",
        "audio": "881.mp3"
    },
    {
        "id": 882,
        "no": "882",
        "en": "implement",
        "ja": "実行する、実施する",
        "section": "必須の200語",
        "audio": "882.mp3"
    },
    {
        "id": 883,
        "no": "883",
        "en": "critic",
        "ja": "評論家、批評家",
        "section": "必須の200語",
        "audio": "883.mp3"
    },
    {
        "id": 884,
        "no": "884",
        "en": "disappointed",
        "ja": "がっかりした、失望した",
        "section": "必須の200語",
        "audio": "884.mp3"
    },
    {
        "id": 885,
        "no": "885",
        "en": "found",
        "ja": "設立する、創立する",
        "section": "必須の200語",
        "audio": "885.mp3"
    },
    {
        "id": 886,
        "no": "886",
        "en": "prescription",
        "ja": "処方せん",
        "section": "必須の200語",
        "audio": "886.mp3"
    },
    {
        "id": 887,
        "no": "887",
        "en": "resign",
        "ja": "辞職する、辞任する",
        "section": "必須の200語",
        "audio": "887.mp3"
    },
    {
        "id": 888,
        "no": "888",
        "en": "urban",
        "ja": "都会の、都市の、都会での",
        "section": "必須の200語",
        "audio": "888.mp3"
    },
    {
        "id": 889,
        "no": "889",
        "en": "workload",
        "ja": "仕事量",
        "section": "必須の200語",
        "audio": "889.mp3"
    },
    {
        "id": 890,
        "no": "890",
        "en": "convert",
        "ja": "換金する、改造する",
        "section": "必須の200語",
        "audio": "890.mp3"
    },
    {
        "id": 891,
        "no": "891",
        "en": "prohibit",
        "ja": "禁止する",
        "section": "必須の200語",
        "audio": "891.mp3"
    },
    {
        "id": 892,
        "no": "892",
        "en": "promptly",
        "ja": "ただちに、迅速に、（時刻）きっかりに",
        "section": "必須の200語",
        "audio": "892.mp3"
    },
    {
        "id": 893,
        "no": "893",
        "en": "accomplished",
        "ja": "熟達した、熟練した、スキルの高い",
        "section": "必須の200語",
        "audio": "893.mp3"
    },
    {
        "id": 894,
        "no": "894",
        "en": "suspend",
        "ja": "一時停止する、吊るす",
        "section": "必須の200語",
        "audio": "894.mp3"
    },
    {
        "id": 895,
        "no": "895",
        "en": "participant",
        "ja": "参加者",
        "section": "必須の200語",
        "audio": "895.mp3"
    },
    {
        "id": 896,
        "no": "896",
        "en": "registration",
        "ja": "登録",
        "section": "必須の200語",
        "audio": "896.mp3"
    },
    {
        "id": 897,
        "no": "897",
        "en": "personnel",
        "ja": "社員、人事部",
        "section": "必須の200語",
        "audio": "897.mp3"
    },
    {
        "id": 898,
        "no": "898",
        "en": "revise",
        "ja": "修正する、見直す",
        "section": "必須の200語",
        "audio": "898.mp3"
    },
    {
        "id": 899,
        "no": "899",
        "en": "donation",
        "ja": "寄付",
        "section": "必須の200語",
        "audio": "899.mp3"
    },
    {
        "id": 900,
        "no": "900",
        "en": "newsletter",
        "ja": "会報、社内報",
        "section": "必須の200語",
        "audio": "900.mp3"
    },
    {
        "id": 901,
        "no": "901",
        "en": "certificate",
        "ja": "認定証、修了証",
        "section": "発展の100語",
        "audio": "901.mp3"
    },
    {
        "id": 902,
        "no": "902",
        "en": "storage",
        "ja": "保管、収納、貯蔵",
        "section": "発展の100語",
        "audio": "902.mp3"
    },
    {
        "id": 903,
        "no": "903",
        "en": "administrative",
        "ja": "事務管理の",
        "section": "発展の100語",
        "audio": "903.mp3"
    },
    {
        "id": 904,
        "no": "904",
        "en": "banquet",
        "ja": "夕食会",
        "section": "発展の100語",
        "audio": "904.mp3"
    },
    {
        "id": 905,
        "no": "905",
        "en": "retail",
        "ja": "小売り",
        "section": "発展の100語",
        "audio": "905.mp3"
    },
    {
        "id": 906,
        "no": "906",
        "en": "ingredient",
        "ja": "（料理の）材料、食材",
        "section": "発展の100語",
        "audio": "906.mp3"
    },
    {
        "id": 907,
        "no": "907",
        "en": "inquiry",
        "ja": "問い合わせ",
        "section": "発展の100語",
        "audio": "907.mp3"
    },
    {
        "id": 908,
        "no": "908",
        "en": "accommodate",
        "ja": "（要求等を）満たす、収容する",
        "section": "発展の100語",
        "audio": "908.mp3"
    },
    {
        "id": 909,
        "no": "909",
        "en": "generate",
        "ja": "（利益や仕事等を）生み出す、（関心や興味等を）生む",
        "section": "発展の100語",
        "audio": "909.mp3"
    },
    {
        "id": 910,
        "no": "910",
        "en": "affordable",
        "ja": "手ごろな価格の",
        "section": "発展の100語",
        "audio": "910.mp3"
    },
    {
        "id": 911,
        "no": "911",
        "en": "authorize",
        "ja": "公認する、（正式に）許可する",
        "section": "発展の100語",
        "audio": "911.mp3"
    },
    {
        "id": 912,
        "no": "912",
        "en": "summary",
        "ja": "要約",
        "section": "発展の100語",
        "audio": "912.mp3"
    },
    {
        "id": 913,
        "no": "913",
        "en": "valid",
        "ja": "有効な",
        "section": "発展の100語",
        "audio": "913.mp3"
    },
    {
        "id": 914,
        "no": "914",
        "en": "tourism",
        "ja": "観光事業",
        "section": "発展の100語",
        "audio": "914.mp3"
    },
    {
        "id": 915,
        "no": "915",
        "en": "equip",
        "ja": "備え付ける、装備する",
        "section": "発展の100語",
        "audio": "915.mp3"
    },
    {
        "id": 916,
        "no": "916",
        "en": "revenue",
        "ja": "収入",
        "section": "発展の100語",
        "audio": "916.mp3"
    },
    {
        "id": 917,
        "no": "917",
        "en": "inexpensive",
        "ja": "安価な",
        "section": "発展の100語",
        "audio": "917.mp3"
    },
    {
        "id": 918,
        "no": "918",
        "en": "exceptional",
        "ja": "並外れた、非常に素晴らしい",
        "section": "発展の100語",
        "audio": "918.mp3"
    },
    {
        "id": 919,
        "no": "919",
        "en": "hallway",
        "ja": "廊下",
        "section": "発展の100語",
        "audio": "919.mp3"
    },
    {
        "id": 920,
        "no": "920",
        "en": "circulation",
        "ja": "流通、（図書館の）貸出・返却、発行部数",
        "section": "発展の100語",
        "audio": "920.mp3"
    },
    {
        "id": 921,
        "no": "921",
        "en": "complicated",
        "ja": "複雑な",
        "section": "発展の100語",
        "audio": "921.mp3"
    },
    {
        "id": 922,
        "no": "922",
        "en": "dedicated",
        "ja": "献身的な、熱心な、専用の",
        "section": "発展の100語",
        "audio": "922.mp3"
    },
    {
        "id": 923,
        "no": "923",
        "en": "mentoring",
        "ja": "メンター制度",
        "section": "発展の100語",
        "audio": "923.mp3"
    },
    {
        "id": 924,
        "no": "924",
        "en": "nutrition",
        "ja": "栄養、栄養学",
        "section": "発展の100語",
        "audio": "924.mp3"
    },
    {
        "id": 925,
        "no": "925",
        "en": "accessible",
        "ja": "到達できる、利用できる",
        "section": "発展の100語",
        "audio": "925.mp3"
    },
    {
        "id": 926,
        "no": "926",
        "en": "coverage",
        "ja": "報道、(保険の）補償",
        "section": "発展の100語",
        "audio": "926.mp3"
    },
    {
        "id": 927,
        "no": "927",
        "en": "motivate",
        "ja": "やる気にさせる",
        "section": "発展の100語",
        "audio": "927.mp3"
    },
    {
        "id": 928,
        "no": "928",
        "en": "refreshment",
        "ja": "軽い飲食物",
        "section": "発展の100語",
        "audio": "928.mp3"
    },
    {
        "id": 929,
        "no": "929",
        "en": "cashier",
        "ja": "レジ係",
        "section": "発展の100語",
        "audio": "929.mp3"
    },
    {
        "id": 930,
        "no": "930",
        "en": "transaction",
        "ja": "取引",
        "section": "発展の100語",
        "audio": "930.mp3"
    },
    {
        "id": 931,
        "no": "931",
        "en": "acknowledge",
        "ja": "認める、（受取を）知らせる",
        "section": "発展の100語",
        "audio": "931.mp3"
    },
    {
        "id": 932,
        "no": "932",
        "en": "nomination",
        "ja": "推薦、候補者、候補作品",
        "section": "発展の100語",
        "audio": "932.mp3"
    },
    {
        "id": 933,
        "no": "933",
        "en": "overtime",
        "ja": "時間外に、残業",
        "section": "発展の100語",
        "audio": "933.mp3"
    },
    {
        "id": 934,
        "no": "934",
        "en": "premises",
        "ja": "敷地",
        "section": "発展の100語",
        "audio": "934.mp3"
    },
    {
        "id": 935,
        "no": "935",
        "en": "reliable",
        "ja": "信頼できる、頼りになる",
        "section": "発展の100語",
        "audio": "935.mp3"
    },
    {
        "id": 936,
        "no": "936",
        "en": "utility",
        "ja": "公共サービス",
        "section": "発展の100語",
        "audio": "936.mp3"
    },
    {
        "id": 937,
        "no": "937",
        "en": "blueprint",
        "ja": "設計図、青写真、詳細な計画",
        "section": "発展の100語",
        "audio": "937.mp3"
    },
    {
        "id": 938,
        "no": "938",
        "en": "compensation",
        "ja": "（仕事の）報酬、対価、補償（金）",
        "section": "発展の100語",
        "audio": "938.mp3"
    },
    {
        "id": 939,
        "no": "939",
        "en": "exclusive",
        "ja": "限定の、独占の、高級な",
        "section": "発展の100語",
        "audio": "939.mp3"
    },
    {
        "id": 940,
        "no": "940",
        "en": "consistently",
        "ja": "安定して、変わらず、着実に",
        "section": "発展の100語",
        "audio": "940.mp3"
    },
    {
        "id": 941,
        "no": "941",
        "en": "update",
        "ja": "更新する、最新情報",
        "section": "発展の100語",
        "audio": "941.mp3"
    },
    {
        "id": 942,
        "no": "942",
        "en": "submission",
        "ja": "提出物、提出",
        "section": "発展の100語",
        "audio": "942.mp3"
    },
    {
        "id": 943,
        "no": "943",
        "en": "subscription",
        "ja": "購読、加入、会費",
        "section": "発展の100語",
        "audio": "943.mp3"
    },
    {
        "id": 944,
        "no": "944",
        "en": "appliance",
        "ja": "電化製品",
        "section": "発展の100語",
        "audio": "944.mp3"
    },
    {
        "id": 945,
        "no": "945",
        "en": "brochure",
        "ja": "パンフレット",
        "section": "発展の100語",
        "audio": "945.mp3"
    },
    {
        "id": 946,
        "no": "946",
        "en": "feedback",
        "ja": "感想、意見",
        "section": "発展の100語",
        "audio": "946.mp3"
    },
    {
        "id": 947,
        "no": "947",
        "en": "merchandise",
        "ja": "商品",
        "section": "発展の100語",
        "audio": "947.mp3"
    },
    {
        "id": 948,
        "no": "948",
        "en": "supplier",
        "ja": "納入業者、供給業者",
        "section": "発展の100語",
        "audio": "948.mp3"
    },
    {
        "id": 949,
        "no": "949",
        "en": "catering",
        "ja": "仕出し、出前、ケータリング",
        "section": "発展の100語",
        "audio": "949.mp3"
    },
    {
        "id": 950,
        "no": "950",
        "en": "agenda",
        "ja": "議題、協議事項",
        "section": "発展の100語",
        "audio": "950.mp3"
    },
    {
        "id": 951,
        "no": "951",
        "en": "fabric",
        "ja": "生地、織物",
        "section": "発展の100語",
        "audio": "951.mp3"
    },
    {
        "id": 952,
        "no": "952",
        "en": "lease",
        "ja": "賃貸借契約、賃貸借する",
        "section": "発展の100語",
        "audio": "952.mp3"
    },
    {
        "id": 953,
        "no": "953",
        "en": "beverage",
        "ja": "飲料",
        "section": "発展の100語",
        "audio": "953.mp3"
    },
    {
        "id": 954,
        "no": "954",
        "en": "prior",
        "ja": "前の、事前の",
        "section": "発展の100語",
        "audio": "954.mp3"
    },
    {
        "id": 955,
        "no": "955",
        "en": "inconvenience",
        "ja": "不便",
        "section": "発展の100語",
        "audio": "955.mp3"
    },
    {
        "id": 956,
        "no": "956",
        "en": "innovative",
        "ja": "革新的な",
        "section": "発展の100語",
        "audio": "956.mp3"
    },
    {
        "id": 957,
        "no": "957",
        "en": "luncheon",
        "ja": "昼食会",
        "section": "発展の100語",
        "audio": "957.mp3"
    },
    {
        "id": 958,
        "no": "958",
        "en": "auditorium",
        "ja": "講堂、観客席",
        "section": "発展の100語",
        "audio": "958.mp3"
    },
    {
        "id": 959,
        "no": "959",
        "en": "qualified",
        "ja": "資格のある、適任の",
        "section": "発展の100語",
        "audio": "959.mp3"
    },
    {
        "id": 960,
        "no": "960",
        "en": "souvenir",
        "ja": "土産物",
        "section": "発展の100語",
        "audio": "960.mp3"
    },
    {
        "id": 961,
        "no": "961",
        "en": "comprehensive",
        "ja": "総合的な、包括的な",
        "section": "発展の100語",
        "audio": "961.mp3"
    },
    {
        "id": 962,
        "no": "962",
        "en": "plumbing",
        "ja": "配管（工事）",
        "section": "発展の100語",
        "audio": "962.mp3"
    },
    {
        "id": 963,
        "no": "963",
        "en": "enhance",
        "ja": "向上させる、強化する",
        "section": "発展の100語",
        "audio": "963.mp3"
    },
    {
        "id": 964,
        "no": "964",
        "en": "intersection",
        "ja": "交差点",
        "section": "発展の100語",
        "audio": "964.mp3"
    },
    {
        "id": 965,
        "no": "965",
        "en": "supervisor",
        "ja": "上司、責任者",
        "section": "発展の100語",
        "audio": "965.mp3"
    },
    {
        "id": 966,
        "no": "966",
        "en": "shipment",
        "ja": "配送、配送品、積み荷",
        "section": "発展の100語",
        "audio": "966.mp3"
    },
    {
        "id": 967,
        "no": "967",
        "en": "invoice",
        "ja": "請求書、送り状",
        "section": "発展の100語",
        "audio": "967.mp3"
    },
    {
        "id": 968,
        "no": "968",
        "en": "notify",
        "ja": "知らせる",
        "section": "発展の100語",
        "audio": "968.mp3"
    },
    {
        "id": 969,
        "no": "969",
        "en": "warehouse",
        "ja": "倉庫",
        "section": "発展の100語",
        "audio": "969.mp3"
    },
    {
        "id": 970,
        "no": "970",
        "en": "upgrade",
        "ja": "改良する、アップグレードする、改良、アップグレード",
        "section": "発展の100語",
        "audio": "970.mp3"
    },
    {
        "id": 971,
        "no": "971",
        "en": "orientation",
        "ja": "（新人向けの）説明会",
        "section": "発展の100語",
        "audio": "971.mp3"
    },
    {
        "id": 972,
        "no": "972",
        "en": "directory",
        "ja": "名簿、（建物の）案内板",
        "section": "発展の100語",
        "audio": "972.mp3"
    },
    {
        "id": 973,
        "no": "973",
        "en": "expire",
        "ja": "期限が切れる",
        "section": "発展の100語",
        "audio": "973.mp3"
    },
    {
        "id": 974,
        "no": "974",
        "en": "merger",
        "ja": "合併、統合",
        "section": "発展の100語",
        "audio": "974.mp3"
    },
    {
        "id": 975,
        "no": "975",
        "en": "quarterly",
        "ja": "年に４回、年に４回の、四半期ごとの",
        "section": "発展の100語",
        "audio": "975.mp3"
    },
    {
        "id": 976,
        "no": "976",
        "en": "questionnaire",
        "ja": "アンケート用紙",
        "section": "発展の100語",
        "audio": "976.mp3"
    },
    {
        "id": 977,
        "no": "977",
        "en": "defective",
        "ja": "欠陥のある、不良の",
        "section": "発展の100語",
        "audio": "977.mp3"
    },
    {
        "id": 978,
        "no": "978",
        "en": "workplace",
        "ja": "職場",
        "section": "発展の100語",
        "audio": "978.mp3"
    },
    {
        "id": 979,
        "no": "979",
        "en": "enroll",
        "ja": "登録する、入会する、入学する",
        "section": "発展の100語",
        "audio": "979.mp3"
    },
    {
        "id": 980,
        "no": "980",
        "en": "pharmacy",
        "ja": "薬局",
        "section": "発展の100語",
        "audio": "980.mp3"
    },
    {
        "id": 981,
        "no": "981",
        "en": "spacious",
        "ja": "広々とした、ゆったりした",
        "section": "発展の100語",
        "audio": "981.mp3"
    },
    {
        "id": 982,
        "no": "982",
        "en": "landmark",
        "ja": "名所、（場所の）目印、重要な出来事",
        "section": "発展の100語",
        "audio": "982.mp3"
    },
    {
        "id": 983,
        "no": "983",
        "en": "commute",
        "ja": "通勤（通学）する",
        "section": "発展の100語",
        "audio": "983.mp3"
    },
    {
        "id": 984,
        "no": "984",
        "en": "medication",
        "ja": "薬",
        "section": "発展の100語",
        "audio": "984.mp3"
    },
    {
        "id": 985,
        "no": "985",
        "en": "discontinued",
        "ja": "（製造・販売が）終了した",
        "section": "発展の100語",
        "audio": "985.mp3"
    },
    {
        "id": 986,
        "no": "986",
        "en": "portfolio",
        "ja": "作品集、有価証券一覧",
        "section": "発展の100語",
        "audio": "986.mp3"
    },
    {
        "id": 987,
        "no": "987",
        "en": "warranty",
        "ja": "保証、保証書",
        "section": "発展の100語",
        "audio": "987.mp3"
    },
    {
        "id": 988,
        "no": "988",
        "en": "refund",
        "ja": "返金、返金する",
        "section": "発展の100語",
        "audio": "988.mp3"
    },
    {
        "id": 989,
        "no": "989",
        "en": "inventory",
        "ja": "在庫（表）、棚卸",
        "section": "発展の100語",
        "audio": "989.mp3"
    },
    {
        "id": 990,
        "no": "990",
        "en": "renowned",
        "ja": "名高い、著名な",
        "section": "発展の100語",
        "audio": "990.mp3"
    },
    {
        "id": 991,
        "no": "991",
        "en": "vendor",
        "ja": "業者、露天商",
        "section": "発展の100語",
        "audio": "991.mp3"
    },
    {
        "id": 992,
        "no": "992",
        "en": "publicize",
        "ja": "宣伝する",
        "section": "発展の100語",
        "audio": "992.mp3"
    },
    {
        "id": 993,
        "no": "993",
        "en": "tuition",
        "ja": "授業料",
        "section": "発展の100語",
        "audio": "993.mp3"
    },
    {
        "id": 994,
        "no": "994",
        "en": "complimentary",
        "ja": "無料の",
        "section": "発展の100語",
        "audio": "994.mp3"
    },
    {
        "id": 995,
        "no": "995",
        "en": "eligible",
        "ja": "資格がある",
        "section": "発展の100語",
        "audio": "995.mp3"
    },
    {
        "id": 996,
        "no": "996",
        "en": "fund-raising",
        "ja": "資金調達のための、慈善の",
        "section": "発展の100語",
        "audio": "996.mp3"
    },
    {
        "id": 997,
        "no": "997",
        "en": "payroll",
        "ja": "給与管理、給与総額、給与台帳",
        "section": "発展の100語",
        "audio": "997.mp3"
    },
    {
        "id": 998,
        "no": "998",
        "en": "reimbursement",
        "ja": "払い戻し",
        "section": "発展の100語",
        "audio": "998.mp3"
    },
    {
        "id": 999,
        "no": "999",
        "en": "itinerary",
        "ja": "旅程表",
        "section": "発展の100語",
        "audio": "999.mp3"
    },
    {
        "id": 1000,
        "no": "1000",
        "en": "endeavor",
        "ja": "努力、試み、努力する",
        "section": "発展の100語",
        "audio": "1000.mp3"
    }
];