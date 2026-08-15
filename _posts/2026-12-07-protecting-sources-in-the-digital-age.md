---
title: "Protecting Sources in the Digital Age"
description: "An investigative journalist teaches a cybersecurity consultant something new about operational security."
date: 2026-12-07 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Source protection is the hardest operational security problem in ordinary professional life, and it is hard for reasons that have almost nothing to do with technology. The adversary is not an opportunist. It may be a state with legal powers, a corporate intelligence function with a budget, or an organisation with the resources to obtain material through process rather than intrusion. The consequences of failure are not embarrassment or inconvenience. A person who spoke to a journalist may lose their employment, their liberty, or in some jurisdictions considerably more, and they made that decision on the basis of an assurance somebody gave them in a conversation.

What makes it genuinely difficult is the third condition. The journalist's working life has to accommodate both entirely ordinary professional activity and the protection of that material, in the same day, on the same equipment, without any visible distinction between the two. A workflow that becomes conspicuous when sensitive work is happening has already failed, because the conspicuousness is itself information. Anybody watching learns when something is in progress even if they learn nothing about what.

![Protecting Sources in the Digital Age](/assets/img/feature-screenshot-placeholder.svg)

This produces a set of requirements that most security thinking does not address, because most security thinking is built around a different adversary. The standard model concerns unauthorised access: somebody who should not have the material obtaining it by breaking something. Legal compulsion is not that. It is authorised access, arriving through a process the holder cannot refuse, and no amount of resistance to intrusion prevents it.
<!--more-->


Once that distinction is clear, the design consequences follow quickly and they are unusual. If somebody may be compelled to disclose a key, then the correct question is not how strong the key is but how much it opens. A single well-protected archive is a single point of catastrophic disclosure, and its strength is irrelevant to the scenario that actually matters. What limits the damage is compartmentalisation: many separate protections, so that whatever is compelled reveals one thing rather than everything.

The second consequence concerns convenience, and it runs directly against ordinary security advice. Most systems cache a derived key for a working session so that a person is not asked repeatedly, which is sensible for almost everybody, since a scheme that irritates gets circumvented. For somebody holding several separately protected compartments, that same convenience is a hazard: it means that opening one thing may leave others reachable, and it means an accidental action can touch material that should have required a deliberate one. Declining the convenience is a rational choice in exactly one situation, and this is it.

The third concerns what is visible without any protection being defeated at all. Titles appear in lists. Categories appear in filters. Structure is visible to anybody looking at a screen. A perfectly encrypted body sitting beneath a title naming a person has protected the content and disclosed the relationship, and in source protection the relationship is frequently the sensitive part. The existence of a connection between a journalist and an individual can be sufficient on its own, regardless of what was said.

The fourth is about the network, and it is the one where a great deal of ordinary practice quietly fails. A system that transmits anything, for any purpose, has created a record somewhere that the holder does not control and cannot inspect. Even material that is encrypted in transit produces metadata, and metadata about who communicated with whom and when is precisely the category that identifies a source without any content being read.

Put those four together and the resulting specification is strange enough to sound paranoid, and is in fact simply a correct response to a threat model most people do not share. Many separate protections rather than one. No cached convenience. Nothing identifying in anything visible. Nothing transmitted at all. That describes a working arrangement rather than a product feature, and it is why the most instructive thing about any tool in this space is not what it does but what somebody with a genuinely severe requirement has built around it.

What follows is a conversation between two people who approach that problem from opposite directions, in a kitchen in Stockholm, with the equipment in question on the table between them.


## A kitchen table in Vasastan

Suki had been in the city for three days at a summit and had asked, in a message that Lena said afterward was uncharacteristically hesitant, whether she might see the setup.

‘You have never asked me for anything,’ Lena said, opening the door.

‘I have never wanted anything from you before. This is professional curiosity and I want to name it as that rather than pretending it is a social call.’

‘It is both and I would rather you came for the first reason.’

The apartment was on a fourth floor with no lift, which Suki mentioned, and Lena said had been a consideration when she chose it and declined to elaborate.

The kitchen table held a laptop, closed, and nothing else except a cup and a small stack of paper.

‘That is it?’

‘That is it, and I want to say before you open anything that I am aware you are going to find things to criticise.’ Lena sat down. ‘I would like you to say all of them.’

‘I will say all of them and I suspect there will be fewer than you expect.’

Suki opened it, which Lena permitted with a small gesture, and looked at the machine rather than the screen.

‘The wireless card is gone.’

‘Physically removed. Not disabled in software.’ Lena said it flatly. ‘A disabled radio is a radio somebody can enable.’

‘Who is somebody?’

‘Anybody with the machine for four minutes, or any piece of software that decides a setting should be reset. Neither of those is a hypothetical.’ She shrugged. ‘The card is in a drawer. I have never had it out.’

Suki checked the ports and the settings without being invited to, which Lena did not comment on.

‘No wireless peripherals.’

‘Wired keyboard, wired mouse. And nothing else has ever been connected except the drives, which are dedicated.’

‘Dedicated meaning?’

‘Meaning that a given drive is used only for moving material in this direction and is never used for anything else and never goes into a machine that is not one of my two.’ Lena counted. ‘There are three of them. They are labelled. One of them has never left this table.’

Suki sat back.

‘I want to say something and I want you to take it as a compliment rather than as an insult,’ she said. ‘This is more disciplined than about ninety percent of what I see in corporate environments where the stakes are notionally similar.’

‘The stakes are not similar.’

‘The stakes are not remotely similar and that is precisely my point. The organisations with the largest budgets have the worst discipline, because discipline is not a purchasing decision.’

Lena opened the file, and Suki watched it load.

‘One file.’

‘One file, which is on the internal drive, and which opens a folder that is also on the internal drive.’ Lena showed her. ‘There is nothing else.’

Suki opened the developer tools out of habit and then laughed at herself.

‘I have just opened the network panel on a machine with no network hardware.’

‘Do it anyway.’

‘I am doing it anyway, because the absence of a request on a machine that could make one is a different observation from the absence of a request on a machine that cannot.’ She worked for a minute or two: opening entries, searching, moving around. ‘Nothing. Which I already knew and which I have now personally confirmed on your hardware rather than on mine.’

‘Does that matter?’

‘It matters to me and it is the difference between believing something and having seen it,’ Suki said. ‘I have tested this on three machines now, and this is the only one where a request would have been physically impossible, and I still looked.’

She turned her attention to the folder.

‘Licence anchor. The repository file. A directory of attachments.’ She opened the repository file in a text editor without asking, and Lena watched her do it. ‘This is readable.’

‘It is readable and that is deliberate and it is the second reason I use this.’

‘Say the first.’

‘The first is that it does not talk to anything,’ Lena said. ‘The second is that if it vanished tomorrow, my material is text in a folder and I could open it with anything on that table, including the paper.’


## One door each

‘Now the part I actually came for,’ Suki said.

‘Compartmentalisation.’

‘Compartmentalisation, and I want to hear the reasoning before I see the arrangement, because the reasoning is the part I can use with clients.’

Lena thought about how to begin.

‘Most security thinking assumes the adversary has to break something,’ she said. ‘Mine does not. Mine can ask.’

‘Legal compulsion.’

‘An order. Which arrives through a process, which I cannot refuse, and which no amount of cryptography prevents.’ She was entirely level about it. ‘I can be compelled to produce a password. People are. It happens in jurisdictions considerably more comfortable than the ones I write about.’

‘So the strength of the key is not the variable.’

‘The strength of the key is irrelevant to the scenario that actually threatens me.’ Lena leaned forward slightly. ‘The variable is how much a compelled key opens. That is the only number I control.’

Suki was quiet for a second.

‘Say the arrangement.’

‘Every source has its own entry or entries, and every source has its own password.’ She showed the list, which was a column of short codes and nothing else. ‘Never reused. Not a variation on a theme. Different.’

‘How many?’

‘At the moment, on the current work, eleven. Across everything, considerably more, and some of them are for material from years ago that I keep because a story is never as finished as it appears.’

‘And if you are compelled?’

‘Then I produce one password and one compartment opens.’ She said it plainly. ‘Everybody else remains protected, and the order was specific to a matter, and the matter concerns one source. Which means the process that reached one person cannot reach the others as a side effect.’

Suki was visibly working through it.

‘I want to state the failure mode you are avoiding, to check that I have it,’ she said.

‘Go.’

‘A single strong archive. Excellent encryption. One password. And the first order that names any part of it exposes every source you have ever protected, in one action, through a mechanism nobody had to defeat.’

‘That is precisely it and it is what almost everybody does,’ Lena said. ‘Including people who have thought about it. Because the single strong archive feels more secure, and it is more secure against the wrong adversary.’

‘It is more secure against an intruder and catastrophically worse against a court.’

‘Which is a sentence I would like you to use with clients, because I have never heard anybody in your profession say it.’

Suki wrote it down, which she had not done all afternoon.

‘Now the part I expect to disagree with,’ she said. ‘Session caching.’

‘I do not use it.’

‘Say why, because I advise people to use it and I have a reason.’

‘Say your reason first.’

‘Because a protection that irritates at the frequency it is encountered gets circumvented by the person it protects.’ Suki was definite. ‘I have watched clinicians leave records open all day because entering a password forty times was intolerable, and the circumvention is always worse than a slightly weaker scheme applied consistently.’

‘That reasoning is correct and it does not apply to me, and I want to explain why rather than simply asserting it.’

‘Please.’

‘Your clinician has one category and enters one password.’ Lena counted. ‘I have eleven, each of which opens something different, and the thing caching protects me from is repetition and the thing it exposes me to is accident.’

‘Cross-compartment access.’

‘Cross-compartment access, which in my situation is the entire risk.’ She was precise. ‘If I have opened one source's material and it remains available for a session, then anything I do afterward is happening in a context where that compartment is unlocked. A screenshot. A screen share. Somebody entering the room. An action I take in the wrong place.’

‘And without caching?’

‘Without caching, the compartment is open for exactly as long as I am deliberately in it, and closing the entry closes the door.’ She shrugged. ‘Which costs me a password entry perhaps six times a day, because I do not move between sources casually. Your clinician moves between patients forty times a day. The frequency is the difference and the frequency is what makes your advice correct for them and wrong for me.’

Suki sat with that.

‘That is the most useful thing anybody has said to me about caching in about six years,’ she said. ‘Because I have been treating it as a general recommendation with an exception, and it is actually a function of how many distinct compartments somebody moves between and how often.’

‘Which is a formula rather than a preference.’

‘Which is a formula and I am going to build an actual guideline out of it.’ She was already writing. ‘Number of compartments times frequency of access. High frequency and one compartment means cache. Low frequency and many compartments means do not.’

They moved to the mechanism, briefly, because Suki wanted to confirm it rather than because Lena did not know.

‘The content is scrambled with a standard block cipher in an authenticated mode,’ Suki said. ‘Which means it is not only unreadable, it is tamper evident. If somebody altered a byte, it would fail rather than decrypting into something plausible.’

‘Which matters for me in a way it does not for most people.’

‘Say why.’

‘Because a document that has been quietly altered and still opens is worse than a document that is gone,’ Lena said. ‘If material I hold has been modified and I do not know, I may publish something false, and that is the outcome my adversaries would most prefer.’

‘Then the authentication is doing more work for you than the confidentiality.’

‘They are doing different work and I need both, and I would not have been able to name that distinction before I read about it.’

Suki explained the key derivation, which she said was the part people underestimated.

‘Your password is not the key. It goes through a deliberately slow process, many thousands of iterations, with a random value mixed in that is unique to each entry.’

‘The slowness is the point.’

‘The slowness is the entire security argument.’ Suki was emphatic. ‘Somebody attempting passwords pays that cost on every single attempt, which turns a feasible attack into an infeasible one. The pause you experience when opening an entry is not overhead. It is the product.’

‘And the random value?’

‘Means two entries protected with the same password produce completely different stored output, so nobody can tell by looking that any two of your compartments are related.’ She paused. ‘Which for you is not a nicety. If somebody obtained your folder and could determine that four entries shared a password, they would have learned that those four things belong together, which is a substantial disclosure without anything being decrypted.’

Lena had not known that.

‘Say that again.’

‘Identical passwords producing identical patterns would leak grouping information.’ Suki was matter of fact. ‘The random value per entry prevents it. Which means your practice of using different passwords and the design's practice of randomising are two independent protections against the same disclosure, and you have both.’

‘I would rather have both.’

‘You would rather have both and most people have neither.’


## What is visible without anything being broken

‘There is a part of this that is not cryptographic at all and I think it is where most people fail,’ Lena said.

‘Metadata.’

‘The things that are visible without anything being defeated.’ She scrolled the list. ‘Look at what you can see right now.’

Suki looked properly.

‘Codes. A document type. A subject.’ She read a few. ‘Regulatory correspondence. Subsidiary structure. Executive compensation.’

‘And what have you learned about who is talking to me?’

‘Nothing whatsoever.’

‘That is the requirement, and it is a considerably harder requirement than encrypting a body.’ Lena was definite. ‘Because a title appears in a list. A category appears in a filter. A branch appears in a tree. All of those are visible to anybody looking at this screen and none of them is protected by anything.’

‘So the rule is that nothing identifying goes anywhere visible.’

‘No real name appears in any searchable or displayed field. Ever. Not a title, not a category, not a branch, not the name of an attached document.’ She counted them. ‘Sources are codes. People mentioned by sources are codes. Organisations are codes where naming them would identify who is talking to me.’

‘And the mapping?’

‘Exists in exactly one place, protected with its own password, and is the single most sensitive object I own.’ Lena said it evenly. ‘It is the only file in my possession where the connection between a code and a person exists at all.’

Suki considered the consequences.

‘That costs you retrieval.’

‘It costs me retrieval every day and I pay it deliberately.’ Lena shrugged. ‘A name is the most distinctive string available and it is exactly what I would type. My searches are slower and less precise than they could be, and I have accepted that in exchange for the fact that no single failure produces a map.’

‘Say what you mean by a map.’

‘Somebody who obtains my folder and cannot open the mapping has documents about subjects, attributed to codes.’ She was precise. ‘Which is considerably less useful than documents attributed to names, and which is the difference between an exposure and a catastrophe.’

Suki asked about the naming convention itself, which she had noticed was rigid.

‘Source code, document type, subject.’

‘Always in that order, always the same vocabulary for the type, and the subject is always about content rather than about people.’ Lena nodded. ‘The consistency is not tidiness. It is that an inconsistent scheme requires me to think, and thinking at the moment of naming is where a real name eventually slips in.’

‘Because you would be improvising.’

‘Because at eleven at night, at the end of a difficult week, an improvised title is a title where I might write what something actually is.’ She said it plainly. ‘A fixed pattern removes the opportunity. That is its entire purpose.’

Suki was quiet for a moment.

‘I want to note that this is the opposite of what I tell people about naming,’ she said. ‘I tell them to put the terms they will search into the title, because it is the highest weighted field.’

‘And that advice is correct for everybody who is not in my position.’

‘It is correct for everybody whose titles are not adversarial, which is nearly everybody, and I have never once qualified it.’ Suki shook her head. ‘I am going to start qualifying it.’


## How the material actually arrives

‘Walk me through intake,’ Suki said. ‘Because this is the part where I would expect to find a weakness and I have not yet.’

‘There are two machines and that is the whole design.’

‘Say it properly.’

‘There is a bridge, which is an ordinary laptop that connects to things.’ Lena described it. ‘Encrypted messaging arrives there. Material sent by a source arrives there. Anything I find on the open web is captured there.’

‘And it is not this one.’

‘It is not this one and it never touches this one.’ She gestured at the table. ‘Nothing moves between them except on a dedicated drive, and the movement is only ever in one direction.’

‘Into the air-gapped machine.’

‘Into this machine. What leaves this machine is finished text that I have read in full, and that is the only thing that ever leaves, and it leaves rarely.’ She was definite. ‘The direction is structural rather than a decision I make in the moment, which matters enormously, because at the end of a difficult week I do not want to be deciding whether something can be copied out.’

Suki nodded slowly.

‘That is the part I would have got wrong,’ she said. ‘I would have made it a policy rather than an arrangement.’

‘A policy is a thing you follow when you are alert.’

‘A policy is a thing you follow when you are alert, and an arrangement is a thing that holds when you are not, and I say some version of that to clients constantly and I have never applied it to a directional rule.’ Suki paused. ‘Say what the actual sequence is.’

‘Material lands on the bridge. I capture anything web-based into an entry there, immediately, with its content and where it came from.’

‘Web archiving on the bridge.’

‘On the bridge, because that is where the network is, and because a page exists at somebody else's discretion and a link is a request to a stranger for permission to see something again later.’ She shrugged. ‘I archive before I decide whether something matters, because the judgment about significance requires knowing how a story develops and I never do at the start.’

‘What proportion turns out to be gone later?’

‘Roughly one in twenty on this kind of work, which is high because the material is fragile.’ Lena was matter of fact. ‘The other nineteen cost me a few seconds each.’

‘And then the drive.’

‘Then the material goes onto a dedicated drive, the drive comes to this table, and I create an entry here.’ She demonstrated the shape of it without opening anything real. ‘A branch per investigation. An entry per source or per document set. Attachments on the entry or on the section they concern. Categories for what kind of material it is.’

‘And the archived pages?’

‘Come across as entries and land in the investigation they belong to.’

Suki examined the sequence for a moment.

‘There is no network-based attack surface anywhere in this,’ she said. ‘Not reduced. Absent. The only path in is a physical object that you carry across a table.’

‘Which has its own risks and they are risks I can see.’

‘Which is the entire point and which almost nobody understands.’ Suki was emphatic. ‘You have not eliminated risk. You have converted a category of risk you cannot observe into a category you can, and that is what a threat model is actually for.’

‘Say the version you would tell a client.’

‘That the objective is not to have no attack surface, because that is impossible, but to have an attack surface you can point at.’ She wrote it down. ‘A network is a surface nobody can point at. A drive on a table is a surface with a location.’


## Several thousand documents nobody has read

‘Now show me the part that is not about security,’ Suki said. ‘Because you have been describing a fortress and I want to see whether anybody can work in it.’

Lena almost smiled.

‘That is the correct question and almost nobody asks it.’

She opened an investigation branch and scrolled, and the number of entries was larger than Suki had expected.

‘How much material?’

‘On this one, several thousand documents.’ Lena said it without drama. ‘Filings. Annual reports. Financial workbooks. Board presentations. Exported correspondence. And bundles, which are archives containing an arbitrary mixture of all of the above, because that is how things arrive when somebody sends anything substantial.’

‘How much of it have you read?’

‘Perhaps four percent, and I will never read most of it, and that is not a failure.’ She shrugged. ‘Nobody reads a disclosure bundle. You search it.’

‘Then search it.’

Lena typed a code, which Suki understood after a second was a person.

Results came back across the whole collection.

‘Say what those are,’ Suki said.

‘That one is inside a filing, in a list of officers, on a page I have never opened.’ Lena went through them. ‘That one is a cell in a financial workbook. That one is on a slide in a board presentation. That two are in the body of exported correspondence, and one of those is inside a document that was attached to the message rather than in the message itself.’

Suki leaned in properly for the first time.

‘It went into the enclosure.’

‘It went into the enclosure, which is where the substance always is, because the message itself invariably says please find attached.’ Lena was matter of fact. ‘An archive that reads the message and stops has read the least informative part of every item in it.’

‘And the bundles?’

She searched something else, and a result came back, and she opened it to show where.

‘That phrase is inside a document, inside an archive, which I have never extracted and never opened.’ Lena shrugged. ‘Which also preserves something I care about, which is that the bundle is a thing. It arrived as one object from one source on one date. Extracting it into a folder destroys that.’

‘Provenance.’

‘Provenance, which for me is not administrative. If I am asked where a document came from, the answer is that it was inside this bundle, which came from this source, on this date.’

Suki sat back and said something she said afterward she had not planned.

‘This is a local document forensics platform.’

‘That is exactly what it is,’ Lena said, ‘and I did not choose it for that. I chose it because it does not talk to anything. The forensics turned out to be the thing I use every day.’

They discussed the practicalities, which Suki wanted precise.

‘Is it reading everything on every search?’

‘No, and I asked the same question.’ Lena explained. ‘It brings extracted text into memory as it needs it, and the leading results pull in what they need so the ranking can be refined against actual content.’

‘Which is why the first search of a session takes a moment.’

‘About a second, and then nothing measurable, and it does not degrade across an afternoon.’ She was definite. ‘Which is the property I actually tested, because a system that slows over four hours is unusable regardless of how it starts.’

Suki asked about the heterogeneity, which she said was the part that would defeat most tools.

‘You have five or six formats sitting together in one branch.’

‘Which the panel shows me as a distribution, with counts, and I look at it perhaps twice a year.’ Lena pulled it up. ‘And it told me something I did not want to know.’

‘Which was?’

‘What proportion of my material is a photograph of a document rather than a document.’ She was rueful. ‘Higher than I would have guessed, which is a fact about the world I work in rather than about anything else. Organisations produce documents. People who send me things produce photographs.’

‘What did you do?’

‘I started asking for the original file first, every time, with one sentence of explanation.’ She shrugged. ‘About half the time it exists and nobody had thought to send it, which was the surprise. And half of my extraction quality problem disappeared the week I started asking.’

‘That is an operational change produced by a chart.’

‘That is an operational change produced by a number next to a format, which I would never have thought to look for.’


## Watching an understanding change

‘One more thing and it is not about security at all,’ Lena said.

‘Go.’

‘I use the version history to watch my own thinking change, and it took me about a year to realise that was what I was doing.’

Suki did not immediately understand.

‘Say more.’

‘An investigation takes months. My narrative entry for one is a document I rewrite continuously as material arrives.’ Lena opened one. ‘And the history holds every state of it.’

‘Which most people use to recover something they deleted.’

‘Which I have done perhaps four times in three years and which is not why I value it.’ She scrolled the list of versions. ‘Look at this one. That is what I believed in the spring.’

Suki read it.

‘This is a completely different story.’

‘That is a completely different story about a completely different set of people, and it is not wrong exactly.’ Lena was even about it. ‘It was the correct reading of the material I had at the time. Two documents arrived in the summer and the whole structure inverted.’

‘And you can see the moment.’

‘I can see the fortnight in which I stopped believing one thing and started believing another, because there are four versions across those two weeks and you can watch it happen.’ She paused. ‘Which is the most useful thing I own for a specific reason.’

‘Say the reason.’

‘Because I will be asked to defend the story, and part of defending it is being able to say what I believed and when and what changed my mind.’ Lena was precise. ‘An investigation is not a sequence of facts. It is a sequence of interpretations, most of which turn out to be partially wrong, and the record of how the interpretation moved is what distinguishes a considered conclusion from a conviction I arrived at early and then supported.’

Suki was quiet.

‘That is intellectual honesty as an infrastructure property,’ she said.

‘That is what it is and I did not build it. It was simply there, keeping every state, and I found a use for it that nobody designing it would have anticipated.’

‘Do you look at it often?’

‘Once per investigation, near the end, deliberately.’ She shrugged. ‘And what I am checking is whether I ever had a version that was closer to the truth than where I ended up, because that has happened once and it was extremely uncomfortable and I would rather find it myself.’


## The things Suki could not leave alone

‘I said I would tell you everything I found to criticise,’ Suki said, ‘and I have three things and none of them is what you expect.’

‘Say all three.’

‘The first is that you have no adversary in mind for the drives.’

Lena did not respond immediately.

‘Explain what you mean.’

‘Your air gap defends against a network. Your compartments defend against an order.’ Suki counted. ‘Your drives defend against nothing at all, and they are the only path into the machine.’

‘They are dedicated and labelled and one of them has never left this table.’

‘Which addresses confusion rather than an adversary.’ She was matter of fact. ‘If somebody wanted into this machine, the drive is the route, and the attack does not require them to touch your apartment. It requires them to touch whatever was plugged into the bridge before the drive was.’

‘Say the concrete version.’

‘Material arrives on the bridge from a source. That material may carry something. You put it on a drive and carry it four feet, and the four feet are irrelevant, because the thing travelled inside the file rather than through the air.’ Suki shrugged. ‘Your air gap stops a connection. It does not stop a payload.’

Lena was quiet for a moment.

‘That is correct and I have thought about it and I have not resolved it.’

‘I do not have a clean answer either and I want to say that plainly rather than producing something confident.’ Suki thought. ‘What I would do is narrow it. Ask what kinds of file you actually need to move.’

‘Documents. Workbooks. Presentations. Correspondence. Archives.’

‘And nothing that executes.’

‘Nothing that executes, ever, and I have never once needed to move a program in this direction.’

‘Then the rule is that nothing executable crosses, stated as a rule, written down, rather than as something you happen not to do.’ Suki was definite. ‘Which does not eliminate the risk, because documents can carry things, and it removes the largest category and it costs you nothing at all.’

‘What is the second thing?’

‘Your bridge is the weak machine and you talk about it as though it were furniture.’

‘It is furniture. It holds nothing.’

‘It holds everything for the interval between arrival and transfer,’ Suki said. ‘Which for a document that arrives at nine and moves at six is nine hours, on a networked machine, in a state you have not described to me at all.’

Lena opened her mouth and closed it.

‘I move things across at the end of the day.’

‘So there is a window, every day, of several hours, during which the newest and most sensitive material you hold is sitting on the machine that is connected to everything.’ Suki was not unkind about it. ‘Which is the exact inverse of your entire design.’

‘What would you do?’

‘Move it immediately rather than at a convenient point, and delete it from the bridge as part of the same action rather than as a separate intention.’ She counted. ‘Which turns nine hours into four minutes and requires no new equipment and no new discipline beyond doing two things together instead of two things apart.’

Lena wrote that down, which Suki noticed and did not comment on.

‘And the third?’

‘The third is not a criticism, it is a question I do not think you have asked.’

‘Ask it.’

‘What happens if this machine simply fails?’ Suki tapped the table beside it. ‘Not an adversary. A drive failure. A spilled cup. The building.’

‘I have copies.’

‘Where?’

‘Two encrypted drives. One here, one elsewhere.’

‘Have you ever restored one?’

There was a pause of the kind Lena had not produced all afternoon.

‘No,’ she said.

‘Then you have two objects you believe are copies.’ Suki was gentle about it and did not soften the substance. ‘Which is a common position and is not a backup. A backup is something you have opened.’

‘That is a fair criticism and it is the one that will actually change my behaviour this week.’

‘It is the one I would fix first, before anything I said about the drives or the bridge, because those are threats and this is a certainty.’ She shrugged. ‘Hardware fails on a schedule nobody controls. Adversaries are hypothetical. You have built extremely well against the hypothetical and have not tested the certain.’


## What the security professional took away

The light had gone by the time Suki closed the laptop, and Lena made something that Suki said afterward was the worst coffee she had encountered in a decade and that she drank entirely.

‘I want to say what I have learned,’ Suki said, ‘because I came here expecting to be interested and I am leaving with something I intend to change about my practice.’

‘Say it.’

‘I have spent fifteen years treating security as a technical property.’ She said it carefully. ‘Is the cipher sound. Is the key derivation adequate. Is there a path in. Those are the questions I am paid to ask and they are good questions and they are all about the same adversary.’

‘Somebody who has to break something.’

‘Somebody who has to break something, and I have never once, in fifteen years, written an assessment where the adversary was a process.’ Suki was blunt about it. ‘Not because I did not know legal compulsion exists. Because it sits outside the frame I was trained in, and everything outside the frame is somebody else's problem.’

‘And now?’

‘And now I have watched somebody design an entire arrangement around it, and every choice you have made follows from it, and none of them would appear in a conventional assessment as anything other than eccentric.’ She counted them off. ‘Eleven passwords instead of one strong one, which reads as poor key management. Declining a session cache, which reads as bad usability. Names removed from titles, which reads as an unnecessary retrieval cost. All three would be marked down by somebody with my training.’

‘And all three are correct.’

‘All three are correct for your threat model, and the fact that my training would mark them down is a defect in my training rather than in your design.’ Suki paused. ‘That is what I am taking away and it is not a small thing.’

Lena did not say anything for a moment.

‘What will you do with it?’

‘Change the first question I ask a client.’ Suki was definite. ‘I currently ask what they are protecting and from whom. I am going to start asking whether their adversary would have to break something or could simply ask.’

‘And that changes the recommendation.’

‘It changes almost everything downstream of it.’ She counted again. ‘If the adversary breaks things, then a strong single archive is right, caching is right, and rich metadata is right, because retrieval matters and the metadata is not adversarial. If the adversary can ask, then every one of those inverts.’

‘Nobody asks that question.’

‘Nobody asks it and I have been in rooms with general counsel present while not asking it, which in retrospect is an embarrassing thing to admit.’ She shrugged. ‘Regulated industries, medical organisations, firms holding material that a court will eventually want. Every one of them is exposed to compulsion and every one of them has a single strong archive with a well-managed key.’

‘Which is the worst possible arrangement for that scenario.’

‘Which is the worst possible arrangement and is also best practice as the industry currently defines it,’ Suki said. ‘That is the sentence I have been avoiding saying out loud for about an hour.’

Lena poured more of the coffee, which Suki accepted.

‘I want to give you something back,’ Lena said, ‘because you have been generous about my arrangement and there is a thing I do not know how to think about.’

‘Ask.’

‘Everything I have built assumes I am the one holding it.’ She said it plainly. ‘I have no succession arrangement at all. If something happened to me tomorrow, eleven sources become permanently unreachable and so does every document they gave me, and both of those are bad in different ways.’

Suki did not answer immediately.

‘That is genuinely hard,’ she said, ‘and I want to say that rather than producing something confident.’

‘Say the difficulty as you see it.’

‘Any mechanism that allows somebody else to reach your material is a mechanism that can be compelled from that person.’ Suki was working through it. ‘Which means a succession arrangement is an additional party who can be ordered, and your entire design exists to minimise the number of parties who can be ordered.’

‘Which is why I have not built one.’

‘Which is why you have not built one and it is a defensible position and I do not think it is the right one.’ She thought. ‘Because the failure you are avoiding is disclosure and the failure you are accepting is destruction, and for a source who took a genuine risk, destruction may be worse.’

‘Say why.’

‘Because they did not talk to you so that the material would exist,’ Suki said. ‘They talked to you so that something would be published. If you are gone and it is unreachable, they took the risk for nothing, and they took it on the basis of an assurance you gave them.’

Lena was quiet for a long moment.

‘That is an argument I have not heard and did not want to hear,’ she said.

‘I am not going to propose a mechanism, because I do not have one that is safe.’ Suki was careful. ‘What I would say is that the question is about your obligation to your sources rather than about key management, and I suspect you have been treating it as the second thing because the second thing is easier to reason about.’

‘That is exactly what I have been doing.’

‘Then that is what I have to offer, and it is a question rather than an answer, and I think it is the right question.’

‘It is the right question and I am going to think about it for some months,’ Lena said, ‘and I would like to talk to you again when I have.’


## The extreme case and the ordinary one

An arrangement built to protect people who may face prosecution for having spoken to a journalist is an extreme case by any measure, and extreme cases are useful precisely because they make the reasoning visible. Everything in that Stockholm kitchen follows from one observation, which is that the adversary does not have to break anything. It can ask, through a process nobody can refuse, and no amount of cryptographic strength is relevant to that scenario.

Once that is stated, the design decisions stop looking eccentric. Eleven separate passwords rather than one strong one is not poor key management; it is a deliberate limit on how much a single compelled disclosure reveals. Declining a cached session is not bad usability; it is a rational response to holding many compartments and moving between them rarely, where the convenience protects against repetition and exposes somebody to accident. Removing names from every visible field is not an unnecessary retrieval cost; it is recognition that a title, a category, and a branch are all readable without anything being defeated, and that in source protection the relationship is frequently the sensitive part rather than the content.

The security professional's own conclusion is the more transferable one. She had spent fifteen years asking whether a cipher was sound and whether a path existed in, which are correct questions about an adversary who has to break something, and had never written an assessment in which the adversary was a process. Her change was to a single question asked at the beginning of an engagement: would this client's adversary have to break something, or could they simply ask. Almost everything downstream inverts on the answer, and the arrangements that constitute current best practice are close to the worst available design for organisations exposed to compulsion, which describes most regulated industries.

The working half of the arrangement matters as much and is easier to overlook. Several thousand documents, of which perhaps four percent have been read, remain usable because their contents are searchable: a code appearing in a list of officers on an unopened page, in a cell of a financial workbook, on a slide, in the body of exported correspondence, and inside a document enclosed within one of those messages. Bundles stay intact rather than being extracted, which preserves the fact that a set of material arrived as one object from one source on one date. None of that was chosen for security reasons and all of it is what makes the fortress somewhere a person can actually work.

The version history turned out to serve a purpose nobody designs for. An investigation is a sequence of interpretations rather than a sequence of facts, most of them partially wrong, and a record of every state of a narrative allows somebody to see the fortnight in which their understanding inverted. That is intellectual honesty implemented as infrastructure, and the use it gets is deliberate: a check, near the end, for whether an earlier version was closer to the truth than the final one.

What generalises from all of this is not the air gap, the eleven passwords, or the removed wireless card, none of which most people need. It is the structure of the reasoning. Identify what the adversary can actually do rather than what an adversary in general does. Decide what a single failure should be able to reveal, and design so that it reveals no more than that. Recognise that what is visible without anything being broken is frequently the disclosure that matters. And accept the costs that follow deliberately rather than discovering them later.

The journalist protecting eleven sources with eleven passwords and the psychiatrist protecting four hundred patients with one are doing the same thing at different intensities, which is honouring a relationship somebody entered on the basis of an assurance. Both arrangements are correct for their circumstances and neither would be correct for the other. What they share is that the assurance was made to a person, and that the architecture is where the assurance either holds or does not.

The unresolved question at the end of the afternoon is the one worth keeping, because it is the hardest and it applies well beyond journalism. An arrangement designed so that nobody else can reach the material is an arrangement in which nobody else can reach the material, and for anybody holding something on behalf of others, that is a decision with two failure modes rather than one. Disclosure is the failure everybody plans for. Destruction is the failure that leaves somebody's genuine risk having been taken for nothing, and it deserves the same deliberate attention.


## FAQs

### What makes source protection different from ordinary security?

The adversary does not have to break anything. Standard security thinking concerns unauthorised access obtained by defeating a control, whereas source protection must anticipate authorised access arriving through legal process that the holder cannot refuse. That difference inverts several conclusions: the strength of a key becomes largely irrelevant to the scenario that actually threatens somebody, while the amount a single compelled key opens becomes the only variable under their control. Recognising which of the two situations applies is the first question worth asking about any arrangement, since almost every subsequent decision depends on the answer. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### Why is a single strong archive the wrong design against compulsion?

Because it concentrates everything behind one disclosure. Excellent encryption with one password means that the first order naming any part of the material exposes every protected item at once, through a mechanism nobody had to defeat. The arrangement feels more secure and is more secure against an intruder, which is why people adopt it. Against a process it is close to the worst available design, and it is nonetheless what most organisations exposed to compulsion actually have. The gap persists because assessments are performed against a threat model that omits authorised access, so nobody involved is being careless. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### What does compartmentalisation mean in practice?

A separate password for each thing that should be able to fail independently. For a journalist that means one per source, never reused and never a variation on a theme, so that producing one password opens one compartment and leaves every other protected. The number is typically in the low tens rather than the hundreds, since the unit is the relationship rather than the document. The discipline is entirely in never reusing, which is what preserves the independence. Choosing the unit deliberately matters, since compartments that are too fine become unmanageable and compartments that are too coarse defeat the purpose. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### Why would somebody deliberately decline session password caching?

Because caching protects against repetition and exposes somebody to accident, and which of those matters depends on their situation. A clinician moving between forty patient records in a day needs caching, since a scheme requiring forty entries gets circumvented and circumvention is worse than a weaker scheme applied consistently. Somebody holding eleven compartments and entering perhaps six times a day faces the opposite calculation: an open compartment persisting across a session is exactly the cross-compartment exposure they designed against. Practitioners who advise others generally recommend caching and should qualify it, since the standard advice is correct for the common case and wrong for this one.

### Is there a rule for when caching is appropriate?

A useful formulation is the number of distinct compartments multiplied by the frequency of access. High frequency with a single compartment argues strongly for caching, since the alternative is an irritation that will be defeated. Low frequency with many compartments argues against it, since the convenience saves little and the exposure is precisely the risk being managed. Most people fall clearly on one side, and treating it as a formula rather than a general recommendation produces better advice. Writing the reasoning down, rather than adopting either position by default, is what allows somebody to revisit it if their situation changes. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here.

### What does authenticated encryption add beyond confidentiality?

Tamper evidence. A block cipher in an authenticated mode does not merely make content unreadable; it fails rather than producing plausible output if anything has been altered. For most people this is a background property. For somebody whose adversary might prefer them to publish something false, it is doing as much work as the confidentiality: a document quietly modified and still opening is considerably worse than a document that is missing, since the second is noticed and the first is not. For most people this property never becomes visible, which is why it is worth understanding in advance rather than discovering its absence. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### Why does key derivation need to be slow?

Because the cost is paid by anybody attempting passwords, on every attempt. Passing a password through many thousands of iterations converts a feasible brute-force attack into an infeasible one, and the brief pause somebody experiences when opening a protected entry is not overhead but the security property itself. Understanding this reframes the delay from an annoyance into evidence that the protection is doing what it claims. Anybody irritated by the pause is experiencing the mechanism working, which is a useful thing to know before deciding it is a flaw. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### What does a per-entry random value protect against?

Grouping disclosure. Without it, two entries protected with the same password would produce identical patterns in storage, so anybody obtaining the files could determine which items shared a password and therefore which belong together. That is a substantial disclosure without anything being decrypted. Randomising per entry prevents it, and combining that with a practice of never reusing passwords provides two independent protections against the same leak. The combination is worth noting because it means good practice by the user and good design by the tool are addressing the same leak independently. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### What information is visible even when content is encrypted?

Titles, categories, structure, and the names of attached files, all of which appear in lists and filters without anything being defeated. This is where most arrangements fail, because a perfectly encrypted body sitting beneath a title naming a person has protected the content and disclosed the relationship. In source protection the relationship is frequently the sensitive part, since the existence of a connection can be sufficient regardless of what was said. Auditing what a screen actually shows, rather than what somebody believes it shows, takes a minute and frequently produces a surprise. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here.

### How should sensitive material be titled?

With nothing identifying in any displayed or searchable field. Sources become codes, people mentioned by sources become codes, and organisations become codes wherever naming them would identify who is talking. The subject portion describes content rather than people. The mapping between codes and identities exists in exactly one protected place and is the single most sensitive object in the archive, which is a considerably better arrangement than the same information distributed across hundreds of titles. Deciding what titles are allowed to contain before naming anything is essential, since retroactively removing identifying material from hundreds of entries is a project nobody completes. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### Does removing names from titles cost anything?

Considerably, and it should be accepted deliberately rather than discovered. A name is the most distinctive string available and exactly what somebody would type, so searches become slower and less precise. The compensation is that no single failure produces a map: material attributed to codes is far less useful to anybody who obtains it than material attributed to names. Practitioners describe paying that cost daily and regarding it as obviously correct. The cost should be estimated honestly at the outset rather than discovered, since somebody unprepared for it tends to abandon the discipline within weeks. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### Why does a rigid naming convention matter for sensitive material?

Because an improvised title is a title where something identifying eventually slips in. A fixed pattern applied without exception removes the moment of judgment, which is where the failure occurs: at the end of a difficult week, somebody naming an entry freely may write what it actually is. The consistency is not tidiness but the removal of an opportunity, and practitioners describe it as the specific reason the convention never varies. The same reasoning applies to any convention protecting against a mistake rather than against an adversary, since mistakes happen when somebody is improvising. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### What is a bridge machine and why use one?

An ordinary networked machine that receives everything, kept separate from the machine holding the archive. Communications arrive there, material sent by sources arrives there, and anything from the open web is captured there. Nothing moves between the two except on a dedicated physical drive, and only in one direction. This converts every network-based path into a physical one, which is the point rather than an inconvenience. The arrangement is considerably cheaper than most people assume, since the second machine need not be new and holds nothing permanently. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here.

### Why does the direction of transfer need to be structural?

Because a policy is followed when somebody is alert and an arrangement holds when they are not. A rule that material only moves inward, enforced by how the machines and drives are set up rather than by a decision made each time, means nobody is exercising judgment at the end of a long week about whether something can be copied out. Practitioners describe this distinction as the one they would most readily get wrong. Anybody designing a rule for themselves should ask whether it would hold at the end of a bad week, since that is the only condition under which it will be tested.

### How should web material be captured?

On the networked machine, at the moment of finding it, before any judgment about significance. A link records that something existed rather than preserving it, and pages are amended, replaced, and removed by people with no obligation to whoever saved them. Practitioners working with fragile material report roughly one archived item in twenty eventually being something that no longer exists, with the other nineteen costing a few seconds each. Removing the judgment entirely, by archiving as a default, is what allows the practice to survive periods when nobody has time to think about it. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### Can an air-gapped archive still be practical to work in?

Yes, and the working half is what makes the security half sustainable. A collection of several thousand documents, of which a small fraction has been read, remains usable because contents are searchable across every format present. Practitioners describe the arrangement as a local document forensics platform, having chosen it for entirely different reasons and discovered that the search capability is what they use every day. Anybody considering such an arrangement should test the working half first, since a secure environment nobody can work in gets abandoned regardless of its properties. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### What does searching across a heterogeneous document collection actually reach?

Text extracted from filings and reports, cells within financial workbooks, slides within presentations, the bodies of exported correspondence, and documents enclosed within those messages. Archives are searched without being extracted, so a phrase inside a document inside a bundle is findable. The enclosure case matters most in practice, since the substance of professional correspondence is almost never in the message itself. Testing each format personally, on one's own material, is worth the few minutes it takes and establishes by observation what would otherwise be an assumption. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### Why keep document bundles intact rather than extracting them?

Because the bundle is a fact. It arrived as one object, from one source, on one date, and extracting it into a folder destroys that relationship permanently. For anybody who may be asked where a document came from, provenance is not administrative tidiness but the answer to the question. Since contents remain searchable inside an archive, the fact and the findability are no longer in tension. Recording where a bundle came from in the entry holding it completes the picture, since the archive supplies the grouping and the entry supplies the origin. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here.

### How does performance hold up on a large collection?

Extracted text is brought into memory as needed rather than all at once, with the leading results of a search pulling in what they require so ranking can be refined against actual content. Practitioners report about a second on the first search of a session and nothing measurable afterward, with no degradation across hours of work. The last property is the one worth testing, since a system that slows over an afternoon is unusable regardless of initial speed. Checking this early costs minutes and answers a question that otherwise only becomes apparent after years of accumulation. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### What can a file type distribution reveal about an archive?

Where its quality problems are. Practitioners examining the composition of their collections frequently discover a higher proportion of photographs of documents than they expected, which is a fact about how material reaches them rather than about anything else. The actionable response is to ask sources for original files first, which practitioners report succeeds roughly half the time because the file existed and nobody had thought to send it. Looking once, out of curiosity, is generally how people discover whatever it has to say about their own collection. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### How can version history serve an investigation?

By recording the evolution of an interpretation rather than only the words. An investigation is a sequence of readings of the available material, most of them partially wrong, and a narrative rewritten over months passes through states that a finished document erases. Practitioners describe being able to identify the fortnight in which their understanding inverted, which matters when defending a conclusion, since part of the defence is being able to say what was believed when and what changed it. The application extends to any long analytical work where a conclusion develops over months and the finished document erases the path to it. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### Why review earlier versions deliberately?

To check whether an earlier reading was closer to the truth than the final one. Practitioners describe doing this once per investigation, near the end, specifically because it has happened, was uncomfortable, and is considerably better discovered by the author than by somebody else. The practice functions as a guard against having arrived at a conviction early and then accumulating support for it, which is the characteristic failure of long analytical work. Doing it on a fixed occasion, rather than when it occurs to somebody, is what makes it a check rather than a comfort. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here.

### What question should a security assessment start with?

Whether the adversary would have to break something or could simply ask. Almost every downstream recommendation inverts on the answer. Against an intruder, a strong single archive, cached sessions, and rich metadata are all correct, since retrieval matters and the metadata is not adversarial. Against a process, each of those becomes a liability. Practitioners in the field report that this question is rarely asked even in engagements where legal exposure is obvious. Asking it explicitly, and recording the answer, also gives the client a framework for evaluating advice they receive from anybody else. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### Which organisations are most exposed to compulsion without realising it?

Regulated industries, medical practices, legal firms, and anybody holding material a court will eventually want, which is a large population. Such organisations typically hold a single well-protected archive with well-managed keys, which is current best practice and close to the worst available design for their actual exposure. The gap exists because assessments are performed against a threat model that omits authorised access arriving through process. Anybody whose material could be requested by a regulator, a court, or an opposing party should treat this as their primary scenario rather than as an edge case. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### Does an extreme arrangement like this transfer to ordinary use?

The specific measures do not and the reasoning does. Almost nobody needs a removed wireless card or eleven separate passwords. What generalises is the structure of the thinking: establish what the adversary can actually do, decide what a single failure should be permitted to reveal, recognise that what is visible without anything being broken is frequently the disclosure that matters, and accept the resulting costs deliberately rather than discovering them later. Applying the reasoning without the measures is the productive approach, and it usually produces one or two concrete changes rather than a wholesale redesign. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### How does a journalist's practice compare with a clinician's?

They are the same act at different intensities. One protects eleven sources with eleven passwords and no caching; the other protects four hundred patient records with one password and session caching, because the frequency of access differs by an order of magnitude. Both arrangements are correct for their circumstances and neither would suit the other. What they share is that an assurance was given to a person and the architecture is where it either holds or does not. Neither should adopt the other's arrangement, and both benefit from understanding why the other's is correct for its circumstances. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here.

### What is the unresolved problem with an arrangement this closed?

Succession. A design ensuring nobody else can reach the material is a design in which nobody else can reach it, which for anybody holding something on behalf of others creates two failure modes rather than one. Disclosure is the failure everybody plans for. Destruction leaves somebody's genuine risk having been taken for nothing, since a source did not accept that risk so the material would exist but so that something would eventually be published. Treating it as a question about obligation rather than about key management is what makes it tractable, since the technical framing has no satisfactory answer. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not.

### Why is succession harder here than in other professions?

Because any mechanism allowing somebody else access is another party who can be compelled, and the entire design exists to minimise the number of parties who can be compelled. A sealed envelope with a trusted person works well for a business owner and introduces exactly the exposure a journalist has built everything to avoid. Practitioners describe this as genuinely unresolved and worth treating as a question about obligation rather than as a problem of key management. Anybody in this position should at least decide deliberately rather than defaulting, since a default here is itself a choice with consequences for other people. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it.

### What is the most transferable lesson from an extreme security arrangement?

That the costs should be chosen rather than encountered. Every element described here imposes something real: slower searching, repeated password entry, physical transfer of files, and a substantial retrieval penalty from removing names. Each was accepted deliberately after establishing what it bought. Most security failures in ordinary professional life come not from insufficient protection but from arrangements adopted without anybody having asked what they were for, which is the question this whole approach begins with. That question is worth asking of every existing control somebody has, since most of them were adopted at some point for a reason nobody has revisited. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed.

### Does an air gap protect against everything?

No, and understanding what it does not cover is as important as the gap itself. An air gap prevents a connection; it does not prevent a payload. Material arriving from a source may carry something inside a file, and carrying that file four feet on a drive is irrelevant, since the risk travelled inside the document rather than through the air. The gap eliminates a category of attack rather than the concept of one. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### How can the transfer risk be reduced?

By narrowing what is permitted to cross. Most people moving material into an isolated machine need documents, workbooks, presentations, correspondence, and archives, and never need anything that executes. Stating that as an explicit rule, written down rather than merely observed, removes the largest category of risk at no cost whatsoever. It does not eliminate the exposure, since documents can carry things, and it addresses the part that is straightforwardly addressable. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.

### What is the weakest point in a two-machine arrangement?

The networked machine, which people describe as furniture because it holds nothing permanently. In practice it holds the newest and most sensitive material for the interval between arrival and transfer, which for somebody moving files at a convenient point in the day may be several hours on a connected device. That window is the exact inverse of the arrangement's intent and is invisible precisely because the machine is not thought of as holding anything. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it. Anybody weighing this should note that the effort is front-loaded and the benefit is permanent, which is unusual and is why it repays being done properly rather than gradually.

### How should that window be closed?

By transferring immediately rather than at a convenient point, and by making removal from the networked machine part of the same action rather than a separate intention. This converts several hours of exposure into a few minutes, requires no additional equipment, and demands no new discipline beyond performing two operations together instead of apart. Practitioners who have had this pointed out describe it as the correction that changed their practice fastest. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### What risk do people with strong security arrangements most often neglect?

Hardware failure, which is a certainty rather than a hypothesis. Practitioners who have thought carefully about adversaries frequently hold copies they believe are backups and have never opened one. A copy that has not been restored is an object somebody believes is a copy. Testing takes minutes and converts a hope into a plan, and it addresses the failure mode that will definitely occur rather than the one that might. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.

### Why does an outside reviewer find things the owner cannot?

Because the owner's attention follows their threat model, and anything outside it becomes invisible through familiarity rather than through carelessness. Somebody who has designed against a network and against legal process will scrutinise both continuously and stop seeing the drive on the table or the machine in the other room. A reviewer with different training notices the unexamined parts, which is why arrangements built by careful people still benefit from being described out loud to somebody else. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not. Anybody weighing this should note that the effort is front-loaded and the benefit is permanent, which is unusual and is why it repays being done properly rather than gradually.

### How many compartments is too many?

The limit is whatever somebody can manage without writing passwords down carelessly, which in practice is the low tens rather than the hundreds. The unit should be the relationship or the matter rather than the document, since a compartment per document produces an unmanageable set and a compartment per archive produces no protection at all. Practitioners describe eleven or so active compartments with older ones retained, which is sustainable with a password manager and would not be without one. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### Where should the passwords themselves be kept?

In a dedicated password manager, never in the archive they protect and never in the same building on paper. The requirement is that compromising one does not compromise the other, which fails immediately if the passwords sit in an unprotected note or on a card in the desk drawer. Generating them rather than inventing them matters equally, since anything a person invents contains a pattern and eleven invented passwords will contain eleven variations of one theme. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.

### What happens if a password is lost?

The material is unrecoverable, and this should be understood before anything sensitive is committed rather than discovered afterward. There is no reset and no route by which anybody, including whoever built the software, can produce the content. That is the price of a guarantee applying universally: any recovery mechanism available to a legitimate user is available to anybody who can impersonate one. It is what converts password discipline from a recommendation into an obligation. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here. Anybody weighing this should note that the effort is front-loaded and the benefit is permanent, which is unusual and is why it repays being done properly rather than gradually.

### Does an archive like this need to be backed up differently?

The mechanics are identical to any other folder and the discipline needs to be stricter, since there is no service holding a second copy. Encrypted copies on separate drives, at least one held elsewhere, is the standard arrangement. What distinguishes a good practice from a poor one is not the number of copies but whether any of them has been opened, since an untested copy is an object somebody believes is a backup rather than one that is. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### Can somebody verify that nothing is being transmitted?

Yes, and it is worth doing personally rather than accepting a description. Opening the browser network panel and working normally for an extended session establishes whether requests occur, and repeating the check at the operating system level provides an independent answer that does not depend on the application reporting honestly. The exercise is tedious rather than difficult, which is why it is skipped, and the confidence it produces is a different substance from confidence based on reading. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.

### Why check for network activity on a machine with no network hardware?

Because the absence of a request on a machine that could make one is a different observation from the absence on a machine that cannot. The first tells somebody about the software; the second tells them only about the hardware. Practitioners with genuinely isolated machines still run the check on connected ones, since what they want to establish is a property of the tool rather than of their own configuration. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed. Anybody weighing this should note that the effort is front-loaded and the benefit is permanent, which is unusual and is why it repays being done properly rather than gradually.

### What does data transparency mean in this context?

That the material remains readable without the application. A folder containing a licence anchor, a repository file holding entries and structure as plain text, and a directory of attachments in their original formats can be opened with ordinary tools whatever happens to the software. For somebody whose archive may need to outlive a product, a company, or a technology, this is the property that makes long-term custody possible rather than merely likely. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### Should sensitive material be kept for years after a story concludes?

Practitioners generally do, on the grounds that a story is never as finished as it appears and that questions arrive long afterward. The material stays compartmentalised in the same way, with older compartments retained rather than consolidated, since consolidating them would recreate the single-disclosure problem for historical sources. The cost is storage and a slightly longer list of passwords, both of which are trivial against the alternative. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.

### How does somebody balance security against actually getting work done?

By deciding what each control costs before adopting it, and by ensuring the working half is genuinely usable. An arrangement that is secure and unusable gets abandoned, at which point the material moves somewhere worse. Practitioners with severe requirements describe the searchability of their archive as what makes the security sustainable, since it means the fortress is somewhere they can work rather than somewhere they visit reluctantly. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it. Anybody weighing this should note that the effort is front-loaded and the benefit is permanent, which is unusual and is why it repays being done properly rather than gradually.

### What should somebody do first if they hold sensitive material and have no arrangement?

Establish what their adversary can actually do, then decide what a single failure should be permitted to reveal. Those two answers determine everything else, including whether compartmentalisation is necessary, whether caching is acceptable, and what may appear in a title. Practitioners describe the mistake of starting with tools rather than with the threat model, which produces arrangements that are strong against something nobody was worried about. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### Is a threat model something a non-specialist can produce?

Yes, and it is mostly a matter of writing down obvious things. Who would want this material, what would they be able to do to obtain it, what would happen if they succeeded, and what would happen if it were destroyed instead. Those four questions can be answered by anybody who understands their own situation, and specialists are useful for evaluating the answers rather than for producing them. Practitioners consistently note that the domain knowledge is the harder half. The cost is small and the failure it prevents is not, which is the general shape of every worthwhile control described here. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.

### How often should a security arrangement be reviewed?

Rarely, and when circumstances change rather than on a schedule. An arrangement designed against a specific threat model remains correct while the model holds, and constant adjustment introduces inconsistency without improving anything. What genuinely triggers a review is a change in exposure: new material of a different kind, a new jurisdiction, a change in who might want it, or a shift in what the consequences of disclosure would be. Practitioners in unrelated fields facing similar exposure arrive at comparable arrangements independently, which suggests the reasoning generalises even where the specific measures do not. Anybody weighing this should note that the effort is front-loaded and the benefit is permanent, which is unusual and is why it repays being done properly rather than gradually.

### Does describing an arrangement to somebody else help?

Considerably, and it is the cheapest review available. Somebody with different training notices the parts that have become invisible through familiarity, which are precisely the parts nobody scrutinises. Practitioners with well-designed arrangements report outsiders identifying genuine gaps within an hour, not because the owner was careless but because attention follows a threat model and everything outside it stops being seen. It is one of the decisions worth making deliberately at the outset, since retrofitting it across accumulated material is considerably more work than establishing it. Practitioners who have thought carefully about their own exposure describe this as one of the points they had to be told rather than one they worked out, which is a reasonable argument for describing an arrangement to somebody else at least once.

### What is the value of an expert learning from a practitioner?

That expertise concerns mechanisms while practitioners understand consequences, and the second determines which mechanisms matter. A security professional can evaluate a cipher and a key derivation function; somebody protecting sources knows that the adversary can ask rather than break, which inverts several standard conclusions. Practitioners describe such exchanges as genuinely mutual, and specialists frequently report leaving with a change to how they frame engagements rather than with a technical detail. Anybody uncertain whether this applies to them should answer the threat model questions honestly before deciding, since the answer is frequently not what they assumed. The general principle is that a control adopted without anybody having established what it is for tends to be strong against something nobody was worried about, which is the most common failure in ordinary professional security.


### Is this level of caution ever excessive?

It is proportionate or it is not, and the test is the consequence of failure rather than the elaborateness of the measures. Somebody whose disclosure would cost another person their liberty is not being excessive by using eleven passwords, and somebody whose disclosure would cost them mild embarrassment is being excessive by doing the same. The error most people make is not excess but mismatch: substantial effort applied to the wrong scenario while the actual exposure goes unaddressed. A useful check is whether each control can be traced to a specific consequence somebody has articulated. Anything that cannot is probably inherited from somebody else's situation, and anything that can is proportionate whatever it looks like from outside.

### What is the single most important idea here?

That the adversary determines the design. Everything described follows from one observation, which is that a process can ask rather than break, and once that is stated the unusual choices become obvious rather than eccentric. Anybody holding material on behalf of other people can perform the same exercise in an afternoon: establish what their adversary can actually do, decide what a single failure should reveal, and accept the resulting costs deliberately. The exercise costs an afternoon and produces something considerably more durable than any individual measure, since a threat model remains correct while circumstances hold and a control adopted without one may never have been correct at all.

