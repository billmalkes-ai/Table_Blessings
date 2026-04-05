import { useState, useEffect } from "react";

const days = [
  {
    day: 1,
    theme: "The First Gift",
    arc: "Creation & Provision",
    reference: "Genesis 1:29–30",
    passage: "Then God said, 'I give you every seed-bearing plant on the face of the whole earth and every tree that has fruit with seed in it. They will be yours for food. And to all the beasts of the earth and all the birds in the sky and all the creatures that move along the ground — everything that has the breath of life in it — I give every green plant for food.' And it was so.",
    framing: "Before the first human hunger, God had already answered it. Provision was not an afterthought — it was written into creation on the day before we arrived.",
    prayer: ["Lord, you fed the world before we knew we needed feeding.", "Receive our thanks for this meal, and make us as generous as you are. Amen."]
  },
  {
    day: 2,
    theme: "The God Who Tends",
    arc: "Creation & Provision",
    reference: "Psalm 104:14–15",
    passage: "He makes grass grow for the cattle, and plants for people to cultivate — bringing forth food from the earth: wine that gladdens human hearts, oil to make their faces shine, and bread that sustains their heart.",
    framing: "God is not a distant architect who left the world to run itself — he is a gardener, tending still, bringing bread up from the ground every season.",
    prayer: ["Thank you for the hands that planted, harvested, and prepared this food.", "We receive it as a gift from your open hand. Amen."]
  },
  {
    day: 3,
    theme: "A Garden Prepared",
    arc: "Creation & Provision",
    reference: "Genesis 2:8–9",
    passage: "Now the Lord God had planted a garden in the east, in Eden; and there he put the man he had formed. The Lord God made all kinds of trees grow out of the ground — trees that were pleasing to the eye and good for food.",
    framing: "The first home God made for his people was a garden, not a temple — he meant from the beginning for nourishment and beauty to go together.",
    prayer: ["Lord, let this table be a place of beauty as well as sustenance.", "Thank you for food that is pleasing to the eye and good for the body. Amen."]
  },
  {
    day: 4,
    theme: "Every Good Gift",
    arc: "Creation & Provision",
    reference: "James 1:17",
    passage: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
    framing: "What is on this table did not arrive by accident or by our effort alone — it descended, as all good things do, from a Father who does not run out of gifts.",
    prayer: ["Father of lights, we trace this meal back to you.", "Nothing good in our lives comes from any other source. Amen."]
  },
  {
    day: 5,
    theme: "The Lord Will Provide",
    arc: "Creation & Provision",
    reference: "Genesis 22:13–14",
    passage: "Abraham looked up and there in a thicket he saw a ram caught by its horns. He went over and took the ram and sacrificed it as a burnt offering instead of his son. So Abraham called that place 'The Lord Will Provide.' And to this day it is said, 'On the mountain of the Lord it will be provided.'",
    framing: "The name Abraham gave to that mountain is still true. Jehovah-Jireh — the Lord who sees what is needed and provides before we reach the moment of need.",
    prayer: ["You provided before Abraham knew what the provision would look like.", "Give us the same trust as we sit at this table. Amen."]
  },
  {
    day: 6,
    theme: "Eyes That Wait",
    arc: "Creation & Provision",
    reference: "Psalm 145:15–16",
    passage: "The eyes of all look to you, and you give them their food at the proper time. You open your hand and satisfy the desires of every living thing.",
    framing: "There is something quietly beautiful about this image — every living creature, from sparrows to families at dinner tables, turning its eyes upward at the hour of hunger.",
    prayer: ["We lift our eyes to you now, as this psalm says all creatures do.", "Open your hand over this table, and let us not eat without noticing. Amen."]
  },
  {
    day: 7,
    theme: "Food for All Flesh",
    arc: "Creation & Provision",
    reference: "Psalm 136:25–26",
    passage: "He gives food to every creature. His love endures forever. Give thanks to the God of heaven. His love endures forever.",
    framing: "The refrain of this psalm repeats 26 times: his love endures forever. Feeding his creation is not incidental — it is one of the ways that love makes itself known.",
    prayer: ["Your love endures forever — and tonight it looks like this meal.", "We give thanks to the God of heaven. Amen."]
  },
  {
    day: 8,
    theme: "Bread from Heaven",
    arc: "Wilderness & Daily Bread",
    reference: "Exodus 16:14–15",
    passage: "When the dew was gone, thin flakes like frost on the ground appeared on the desert floor. When the Israelites saw it, they said to each other, 'What is it?' For they did not know what it was. Moses said to them, 'It is the bread the Lord has given you to eat.'",
    framing: "A million hungry people in a wilderness, and God answered with something so strange they didn't have a word for it. Manna means what is it — a name that admits dependence without requiring explanation.",
    prayer: ["We often can't fully explain where our provision comes from either.", "Teach us to receive what you give with the same humility. Amen."]
  },
  {
    day: 9,
    theme: "Daily",
    arc: "Wilderness & Daily Bread",
    reference: "Matthew 6:11",
    passage: "Give us this day our daily bread.",
    framing: "Jesus did not teach us to pray for a year's supply, or a warehouse, or enough to stop worrying. He taught us to pray for today's bread — which means he intended us to return tomorrow and ask again.",
    prayer: ["Lord, we are here again today, asking again.", "Thank you that you have never grown tired of that. Amen."]
  },
  {
    day: 10,
    theme: "More Than Bread",
    arc: "Wilderness & Daily Bread",
    reference: "Deuteronomy 8:3",
    passage: "He humbled you, causing you to hunger and then feeding you with manna, which neither you nor your ancestors had known, to teach you that man does not live on bread alone but on every word that comes from the mouth of God.",
    framing: "The hunger was the lesson, not the punishment. God fed them with something unknown so they would learn that the source of life is not the food itself, but the voice that commands it into being.",
    prayer: ["Feed us tonight with more than what is on this table.", "Let your Word nourish us the way this food nourishes our bodies. Amen."]
  },
  {
    day: 11,
    theme: "Water from the Rock",
    arc: "Wilderness & Daily Bread",
    reference: "Numbers 20:8, 11",
    passage: "'Take the staff, and you and your brother Aaron gather the assembly together. Speak to that rock before their eyes and it will pour out its water.' ... Then Moses raised his arm and struck the rock twice with his staff. Water gushed out, and the community and their livestock drank.",
    framing: "In a land with no water, God put water inside a rock. He is not limited by the ordinary logic of where provision comes from.",
    prayer: ["You provide from places we would never think to look.", "Give us eyes to see your provision tonight, wherever it came from. Amen."]
  },
  {
    day: 12,
    theme: "The Angel's Touch",
    arc: "Wilderness & Daily Bread",
    reference: "1 Kings 19:5–6",
    passage: "All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again.",
    framing: "Elijah was exhausted, fleeing, done. God's first response was not a sermon — it was bread and water and the instruction to rest. Sometimes provision is the most pastoral thing God does.",
    prayer: ["When we are worn out, you still set a table.", "Receive our thanks tonight — we needed this more than we may admit. Amen."]
  },
  {
    day: 13,
    theme: "The Jar That Did Not Run Out",
    arc: "Wilderness & Daily Bread",
    reference: "1 Kings 17:14–16",
    passage: "'The jar of flour will not be used up and the jug of oil will not run dry until the day the Lord sends rain on the land.' She went away and did as Elijah had told her. So there was food every day for Elijah and for the woman and her family.",
    framing: "A widow with enough for one last meal, and the flour did not run out for three years. God specializes in making small things last past the point of reason.",
    prayer: ["We confess we are often afraid there will not be enough.", "Thank you for three years of flour in a jar we expected to empty. Amen."]
  },
  {
    day: 14,
    theme: "The Finest Wheat",
    arc: "Wilderness & Daily Bread",
    reference: "Psalm 81:16",
    passage: "But you would be fed with the finest of wheat; with honey from the rock I would satisfy you.",
    framing: "This is God speaking — not describing what was given, but what he wanted to give, what he was always ready to give. The finest. Not the remainder. The best.",
    prayer: ["You do not give us your surplus — you give us your finest.", "We sit at this table humbled by that. Amen."]
  },
  {
    day: 15,
    theme: "First and Best",
    arc: "Harvest & Abundance",
    reference: "Deuteronomy 26:10",
    passage: "And now I bring the firstfruits of the soil that you, Lord, have given me. Place the basket before the Lord your God and bow down before him.",
    framing: "The firstfruits offering was not a tithe calculation — it was an act of trust. You gave back the first and the best before you knew whether the rest would follow. That is what gratitude at a table looks like before you eat.",
    prayer: ["We have not yet eaten, and we give thanks.", "This is our firstfruits — the gratitude before the meal. Amen."]
  },
  {
    day: 16,
    theme: "Leave Some Behind",
    arc: "Harvest & Abundance",
    reference: "Leviticus 19:9–10",
    passage: "When you reap the harvest of your land, do not reap to the very edges of your field or gather the gleanings of your harvest. Do not go over your vineyard a second time or pick up the grapes that have fallen. Leave them for the poor and the foreigner. I am the Lord your God.",
    framing: "God built generosity into the harvest law — not as charity after the fact, but as a design feature of how food was gathered. The edges were never meant to be ours.",
    prayer: ["We eat tonight knowing there are edges we are meant to leave.", "Make us people who harvest with open hands. Amen."]
  },
  {
    day: 17,
    theme: "Seedtime and Harvest",
    arc: "Harvest & Abundance",
    reference: "Genesis 8:22",
    passage: "As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease.",
    framing: "After the flood, when the world began again, this was one of God's first promises — the rhythms of provision would hold. The seasons would keep turning. The harvest would keep coming.",
    prayer: ["You have kept this promise since Noah stepped off the ark.", "We eat tonight in a long line of people who trusted the harvest. Amen."]
  },
  {
    day: 18,
    theme: "The Earth Has Yielded",
    arc: "Harvest & Abundance",
    reference: "Psalm 67:6–7",
    passage: "The land yields its harvest; God, our God, blesses us. May God bless us still, so that all the ends of the earth will fear him.",
    framing: "Harvest is not just private provision — it is testimony. When the earth yields and we receive with gratitude, the nations see what kind of God is behind it.",
    prayer: ["Let this table be a witness, even if only to ourselves.", "You bless us so we can declare you to the world. Amen."]
  },
  {
    day: 19,
    theme: "Multiplied for Generosity",
    arc: "Harvest & Abundance",
    reference: "2 Corinthians 9:10–11",
    passage: "Now he who supplies seed to the sower and bread for food will also supply and increase your store of seed and will enlarge the harvest of your righteousness. You will be enriched in every way so that you can be generous on every occasion.",
    framing: "The purpose of abundance is not accumulation — it is enlarged capacity for giving. God increases what we have so that the circle of generosity can grow wider.",
    prayer: ["You give us more than we need so we can give more than we planned.", "Make us sowers tonight — at this table and beyond it. Amen."]
  },
  {
    day: 20,
    theme: "The Generous Soul",
    arc: "Harvest & Abundance",
    reference: "Proverbs 11:24–25",
    passage: "One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.",
    framing: "Generosity is not just a virtue — it is a structure built into the economy of God's world. The closed hand loses. The open hand fills.",
    prayer: ["We receive this meal with open hands.", "Make our hands as open toward others as yours are toward us. Amen."]
  },
  {
    day: 21,
    theme: "The Years Restored",
    arc: "Harvest & Abundance",
    reference: "Joel 2:26",
    passage: "You will have plenty to eat, until you are full, and you will praise the name of the Lord your God, who has worked wonders for you; never again will my people be shamed.",
    framing: "This is a promise made to a people who had watched the locusts take everything. God does not just provide — he restores. He makes up the years the locusts ate.",
    prayer: ["Some of us are eating tonight from years you have restored.", "Thank you for the abundance we almost didn't believe would come back. Amen."]
  },
  {
    day: 22,
    theme: "The Tax Collector's Table",
    arc: "Table Fellowship",
    reference: "Luke 5:29–31",
    passage: "Then Levi held a great banquet for Jesus at his house, and a large crowd of tax collectors and others were eating with them. But the Pharisees and the teachers of the law complained to his disciples: 'Why do you eat and drink with tax collectors and sinners?' Jesus answered them, 'It is not the healthy who need a doctor, but the sick.'",
    framing: "Jesus did not hesitate at Levi's table. He sat down with people no one else would eat with, and called it exactly where he needed to be. The table was where the healing happened.",
    prayer: ["Lord, you were never too good for anyone's table.", "Make our table the kind you would sit down at without hesitation. Amen."]
  },
  {
    day: 23,
    theme: "He Came to My House",
    arc: "Table Fellowship",
    reference: "Luke 19:5–6",
    passage: "When Jesus reached the spot, he looked up and said to him, 'Zacchaeus, come down immediately. I must stay at your house today.' So he came down at once and welcomed him gladly.",
    framing: "Jesus invited himself. He looked up into a tree at a man nobody wanted near them and said I must stay at your house. The meal at Zacchaeus's table changed everything about Zacchaeus.",
    prayer: ["Come to our table as you came to his.", "We welcome you gladly. Amen."]
  },
  {
    day: 24,
    theme: "He Gave Thanks First",
    arc: "Table Fellowship",
    reference: "Luke 9:16",
    passage: "Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke them. Then he gave them to the disciples to distribute to the people.",
    framing: "Before the miracle, there was gratitude. Jesus did not wait to see whether the bread would multiply before he gave thanks. He thanked the Father for five loaves as if they were already enough.",
    prayer: ["Teach us to give thanks before we know how it will all work out.", "Five loaves is enough if you are holding them. Amen."]
  },
  {
    day: 25,
    theme: "Known in the Breaking",
    arc: "Table Fellowship",
    reference: "Luke 24:30–31",
    passage: "When he was at the table with them, he took bread, gave thanks, broke it and began to give it to them. Then their eyes were opened and they recognized him, and he disappeared from their sight.",
    framing: "They had walked with him for hours and not recognized him. Then he broke bread — the same gesture, the same hands — and suddenly they knew. He is still made known at tables.",
    prayer: ["Open our eyes tonight.", "Let us recognize you in the breaking of this bread. Amen."]
  },
  {
    day: 26,
    theme: "The Father Ran",
    arc: "Table Fellowship",
    reference: "Luke 15:22–24",
    passage: "But the father said to his servants, 'Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet. Bring the fattened calf and kill it. Let's have a feast and celebrate. For this son of mine was dead and is alive again; he was lost and is found.' So they began to celebrate.",
    framing: "The father did not wait for an apology to finish before he started planning the feast. The feast was the father's first response to the son's return. That is the kind of welcome behind every meal we receive.",
    prayer: ["You killed the fattened calf for us before we finished our apology.", "We come to this table as people who were lost and have been found. Amen."]
  },
  {
    day: 27,
    theme: "One Thing Is Needed",
    arc: "Table Fellowship",
    reference: "Luke 10:41–42",
    passage: "'Martha, Martha,' the Lord answered, 'you are worried and upset about many things, but few things are needed — or indeed only one. Mary has chosen what is better, and it will not be taken away from her.'",
    framing: "Martha's distraction was the meal itself. Jesus did not dismiss the meal — he simply refused to let it become more important than presence. The table is meant to gather us, not scatter us.",
    prayer: ["Let this meal gather us rather than distract us.", "May the one thing needed be present at this table tonight. Amen."]
  },
  {
    day: 28,
    theme: "In Remembrance",
    arc: "Table Fellowship",
    reference: "Luke 22:19–20",
    passage: "And he took bread, gave thanks and broke it, and gave it to them, saying, 'This is my body given for you; do this in remembrance of me.' In the same way, after the supper he took the cup, saying, 'This cup is the new covenant in my blood, which is poured out for you.'",
    framing: "Every meal that follows this one carries something of this one inside it. The ordinary table was transformed that night — not abolished, but filled. We eat in remembrance at every table we sit at.",
    prayer: ["Every meal is an echo of this one.", "We do not take bread tonight without knowing what bread cost. Amen."]
  },
  {
    day: 29,
    theme: "Come, for Everything Is Ready",
    arc: "The Eternal Table",
    reference: "Luke 14:16–17",
    passage: "Jesus replied: 'A certain man was preparing a great banquet and invited many guests. At the time of the banquet he sent his servant to tell those who had been invited, \"Come, for everything is now ready.\"'",
    framing: "The great banquet of the Kingdom is already prepared. The invitation has already been sent. Every meal we share now is a small rehearsal for the one that is waiting.",
    prayer: ["We eat tonight as people who have been invited to a greater table.", "Come, everything is ready — let that be true here first. Amen."]
  },
  {
    day: 30,
    theme: "The Feast That Has No End",
    arc: "The Eternal Table",
    reference: "Isaiah 25:6",
    passage: "On this mountain the Lord Almighty will prepare a feast of rich food for all peoples, a banquet of aged wine — the best of meats and the finest of wines.",
    framing: "This is where the story ends — not with hunger, not with scarcity, not with the question of whether there will be enough. It ends with a mountain and a feast and all peoples and the best of everything. We eat tonight in the direction of that day.",
    prayer: ["Every meal we have shared this month has been practice for this one.", "Come, Lord Jesus. Until then — thank you for the table you have already set. Amen."]
  }
];

const arcColors = {
  "Creation & Provision": "#5C4A32",
  "Wilderness & Daily Bread": "#3D4F3A",
  "Harvest & Abundance": "#6B4226",
  "Table Fellowship": "#3A3D52",
  "The Eternal Table": "#4A3252",
};

export default function TableBlessings() {
  const [currentDay, setCurrentDay] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const goToDay = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentDay(index);
      setFade(true);
    }, 220);
  };

  const d = days[currentDay];
  const arcColor = arcColors[d.arc];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f7f1e8 0%, #efe6d5 50%, #e8ddc8 100%)",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 0 60px 0",
    }}>

      {/* Header */}
      <div style={{
        width: "100%",
        background: "#2C1F0E",
        padding: "28px 24px 22px",
        textAlign: "center",
        borderBottom: "3px solid #8B6914",
      }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          color: "#D4AA5F",
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}>Thirty Days at the Table</div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#F5ECD7",
          fontSize: "13px",
          fontStyle: "italic",
          fontWeight: 300,
          letterSpacing: "1px",
        }}>A household blessing for every evening meal</div>
      </div>

      {/* Day Selector — scrollable row */}
      <div style={{
        width: "100%",
        overflowX: "auto",
        background: "#3D2B10",
        padding: "10px 16px",
        display: "flex",
        gap: "6px",
        scrollbarWidth: "none",
      }}>
        {days.map((d, i) => (
          <button
            key={i}
            onClick={() => goToDay(i)}
            style={{
              flexShrink: 0,
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: i === currentDay ? "2px solid #D4AA5F" : "2px solid transparent",
              background: i === currentDay ? "#8B6914" : "rgba(255,255,255,0.08)",
              color: i === currentDay ? "#FFF8E8" : "#B89A60",
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >{i + 1}</button>
        ))}
      </div>

      {/* Main Card */}
      <div style={{
        maxWidth: "640px",
        width: "100%",
        padding: "0 20px",
        marginTop: "32px",
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}>

        {/* Arc label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}>
          <div style={{
            width: "28px",
            height: "2px",
            background: arcColor,
            opacity: 0.6,
          }} />
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "9px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: arcColor,
            opacity: 0.8,
          }}>{d.arc}</div>
        </div>

        {/* Day number + Theme */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            letterSpacing: "3px",
            color: "#8B6914",
            marginBottom: "6px",
          }}>Day {d.day}</div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 6vw, 38px)",
            fontWeight: 500,
            color: "#1A0F04",
            margin: 0,
            lineHeight: 1.15,
          }}>{d.theme}</h1>
        </div>

        {/* Scripture block */}
        <div style={{
          background: "rgba(44, 31, 14, 0.04)",
          border: "1px solid rgba(139, 105, 20, 0.2)",
          borderLeft: "3px solid #8B6914",
          borderRadius: "2px",
          padding: "20px 22px",
          marginBottom: "24px",
        }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "9px",
            letterSpacing: "2.5px",
            color: "#8B6914",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>{d.reference}</div>
          <p style={{
            fontStyle: "italic",
            fontSize: "clamp(16px, 3.5vw, 19px)",
            lineHeight: 1.75,
            color: "#2C1F0E",
            margin: 0,
            fontWeight: 300,
          }}>"{d.passage}"</p>
        </div>

        {/* Framing sentence */}
        <p style={{
          fontSize: "clamp(15px, 3vw, 17px)",
          lineHeight: 1.8,
          color: "#4A3520",
          marginBottom: "32px",
          fontWeight: 400,
        }}>{d.framing}</p>

        {/* Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "28px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(139, 105, 20, 0.25)" }} />
          <div style={{ color: "#8B6914", fontSize: "16px", opacity: 0.7 }}>✦</div>
          <div style={{ flex: 1, height: "1px", background: "rgba(139, 105, 20, 0.25)" }} />
        </div>

        {/* Prayer */}
        <div style={{
          background: "#2C1F0E",
          borderRadius: "4px",
          padding: "24px 26px",
        }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "#8B6914",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}>Prayer</div>
          {d.prayer.map((line, i) => (
            <p key={i} style={{
              fontStyle: "italic",
              fontSize: "clamp(16px, 3.2vw, 18px)",
              lineHeight: 1.75,
              color: "#F5ECD7",
              margin: i === 0 ? "0 0 6px 0" : 0,
              fontWeight: 300,
            }}>{line}</p>
          ))}
        </div>

        {/* Navigation */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "36px",
        }}>
          <button
            onClick={() => currentDay > 0 && goToDay(currentDay - 1)}
            disabled={currentDay === 0}
            style={{
              background: "transparent",
              border: "1px solid rgba(139, 105, 20, 0.4)",
              color: currentDay === 0 ? "#C4A96A44" : "#8B6914",
              fontFamily: "'Cinzel', serif",
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "10px 18px",
              cursor: currentDay === 0 ? "default" : "pointer",
              borderRadius: "2px",
            }}
          >← Prev</button>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            color: "#8B6914",
            fontStyle: "italic",
          }}>{currentDay + 1} of 30</div>

          <button
            onClick={() => currentDay < 29 && goToDay(currentDay + 1)}
            disabled={currentDay === 29}
            style={{
              background: currentDay === 29 ? "transparent" : "#8B6914",
              border: "1px solid #8B6914",
              color: currentDay === 29 ? "#8B691444" : "#FFF8E8",
              fontFamily: "'Cinzel', serif",
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "10px 18px",
              cursor: currentDay === 29 ? "default" : "pointer",
              borderRadius: "2px",
            }}
          >Next →</button>
        </div>

      </div>
    </div>
  );
}
