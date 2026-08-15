---
title: "Three Perspectives on Per-Entry Encryption"
description: "A psychiatrist, a pastor, and a journalist explain why encrypting individual notes changes everything."
date: 2026-10-17 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Encryption in consumer software is almost always a switch. It is on or it is off, it applies to everything or to nothing, and one password stands between the user and the entire contents of whatever they have stored. This design is understandable. It is simple to explain, simple to implement, and it produces a satisfying answer to the question of whether the product is secure. It also makes an assumption about the material it protects that is false for nearly everybody who holds anything genuinely sensitive: that all of it is equally sensitive, and that a single boundary is the right shape for the whole collection.

Consider what an ordinary professional archive actually contains. A therapist holds appointment times, invoicing details, continuing education records, notes about a supervision meeting, and, alongside all of it, the account of what somebody said in a room about the worst thing that ever happened to them. A minister holds volunteer rotas, building maintenance quotes, a draft of Sunday's sermon, and the record of a conversation with a parishioner about an addiction nobody else knows exists. A reporter holds published clippings, public filings, contact details for press officers, and the identity of a person who will lose their liberty if that identity becomes known. Treating those categories identically is not rigour. It is a failure to distinguish, and the failure runs in both directions at once.

![Three Perspectives on Per-Entry Encryption](/assets/img/feature-screenshot-placeholder.svg)

The direction people notice first is under-protection: material that should have been locked sitting behind whatever the general arrangement provides. The direction they notice later is subtler and arguably more damaging. When everything requires the same ceremony, the ceremony stops meaning anything. A password entered forty times a day to reach a calendar becomes muscle memory, and muscle memory is exactly what you do not want standing between a person and the most consequential material they hold. Uniform protection produces uniform inattention, and inattention is where the real failures come from.
<!--more-->


Per-entry encryption inverts the model. Rather than one boundary around everything, each item can carry its own, with its own key derived from its own password, so that opening one thing opens precisely that thing and nothing else. The immediate consequence is technical: the blast radius of any single compromise is defined by the user rather than by the software. The consequence people report as more significant is psychological, and it takes a while to articulate. When most of a workspace is open and a small part of it is not, reaching the protected part becomes a deliberate act. Something must be decided and performed. That moment of deliberation turns out to be doing a great deal of work that nobody designed it to do.

There is a further point about honesty. A model that requires everything to be protected equally will, in practice, be defeated by the people it protects, because a scheme that is annoying at the frequency it is actually encountered gets circumvented. Users choose shorter passwords, leave sessions open, write credentials somewhere convenient, or simply keep the sensitive material outside the system entirely, which is the worst outcome available and the most common one. A model that lets a person protect the twenty entries that matter with genuine rigour, while leaving the four hundred that do not entirely open, produces better real-world security than a uniform scheme that everyone quietly works around.

What the granular model actually requires is that the user make a judgment: this is sensitive, that is not, these two things belong behind different doors. That judgment is not a burden imposed by the software. It is a judgment these professionals are already making constantly, in how they speak, what they write down, where they leave a document, and what they say when somebody walks into the room. The software either has a way to express that judgment or it does not, and when it does not, the mismatch shows up as a persistent low-grade discomfort that people usually attribute to themselves rather than to the tool.

Three people who hold very different kinds of confidence agreed to compare how they use it, and discovered that they had arrived at three incompatible password strategies and one identical conclusion.


## Three windows, and a man slightly worried about the technology

Meera arranged it, which surprised nobody who knew her, and she arranged it the way she arranged everything, by asking two separate people a question and then noticing that their answers belonged in the same room.

Pastor David Achebe joined four minutes early, which was also characteristic, and spent three of those minutes visibly checking that his camera was working by looking at himself with an expression of mild suspicion.

‘Meera, I can see myself, which I assume is correct.’

‘That is correct, David.’

‘And when the third person arrives, will there be three of us on the screen, or will it change to something I have to operate?’

‘It will change on its own and you will not have to do anything.’

‘Good.’ He settled. ‘I have done this twice and both times somebody said the words breakout room and I lost approximately eleven minutes of my life.’

Meera laughed. She was in her consulting room in Austin between appointments, the blinds half drawn against a sun that had not yet accepted October. David was in his office in Atlanta, in front of a bookshelf that had clearly been arranged for a different purpose and had since become a filing system.

Lena joined at the appointed minute, in a plain room in Stockholm with nothing behind her at all.

‘Lena Johansson.’

‘David Achebe. I lead a church here in Atlanta.’

‘Lena is a reporter,’ Meera said. ‘She works on stories involving documents that people were not supposed to give her.’

‘Then we have both spent our careers being told things in confidence,’ David said, ‘and I imagine yours are more legally interesting than mine.’

‘Occasionally,’ Lena said. ‘Yours are probably harder.’

David looked genuinely taken aback. ‘Why would you say that?’

‘Because I can decline a source,’ Lena said. ‘I can decide a story is not worth the risk. You cannot decline a member of your congregation who arrives at your office in distress. You have to take it, and once you have taken it you are responsible for it, and you did not get to assess anything first.’

There was a small pause.

‘That is,’ David said slowly, ‘the most accurate description of my work that anyone outside it has ever offered me.’

Meera cut in, gently. ‘I should say why I did this. Both of you told me something about how you protect your notes, separately, some weeks apart, and the two things you told me were completely different and both correct. And I have been sitting with that ever since and I wanted the three of us in one place.’

‘What did we say?’ Lena asked.

‘David told me he uses one password for everything pastoral. You told me you use a different password for every single source and would consider reusing one a serious lapse.’ Meera adjusted her position slightly. ‘I use something in between, and I could not decide which of us was right, and then I realised the question was wrong.’

‘Because we are protecting different shapes of thing,’ Lena said.

‘Because we are protecting different shapes of thing. Which I would like to spend an hour on, if you can both spare it.’

David checked something off camera.

‘I have until half past four,’ he said. ‘At half past four a man is coming to tell me about the roof, and he will be here whether or not we have solved anything.’


## Meera: three tiers, and the two seconds before a session

‘I will go first because I organized this and it would be poor form to make either of you start,’ Meera said.

She began with the thing people found most surprising, which was how much of her vault was not encrypted at all.

‘Most of it,’ she said. ‘My scheduling notes are open. My billing and administrative material is open. My continuing education records, conference notes, the reading I do to keep current, the notes I make about running a solo practice, all open. If somebody obtained my laptop they would learn that I am behind on my accounting and that I attended a workshop I did not enjoy.’

‘That is more than half your entries?’ Lena asked.

‘Considerably more than half. Around three hundred of about five hundred.’ Meera was precise about it. ‘And I want to be clear that this is a deliberate design rather than laziness, because when I started I encrypted everything, and it lasted about six weeks.’

‘What went wrong?’

‘Nothing went wrong, which was the problem.’ She smiled slightly. ‘I entered a password to look at my own calendar. I entered it to check when a supplier invoice was due. I entered it forty times a day, and within a month my fingers knew it better than my mind did, and I noticed one afternoon that I had unlocked something without any awareness of having done so.’

David made a small sound of recognition.

‘The unlocking had stopped meaning anything,’ Meera said. ‘Which is a security problem and also a clinical one, because I had built a system where entering the door to a patient's most private material felt exactly like entering the door to a calendar.’

Every patient entry is now encrypted, individually. Beneath each one, sections separate the record of what happened, her clinical reasoning, her own observed reactions for supervision, and administrative matters such as scheduling.

‘Different passwords?’ Lena asked, and it was clear this was the question she cared about.

‘Three, grouped by risk.’ Meera counted them. ‘One for the general clinical population. One for a smaller group where the material is more consequential if exposed, either because of what it contains or because of who the person is. And one for a very small number of entries that I would describe as the ones that would end a life if they surfaced, and I am not being dramatic.’

‘Why three rather than one per patient?’

‘Because I would not sustain one per patient and I want to be honest about that rather than describe an ideal I do not practise,’ Meera said. ‘I see people at fifty minute intervals across a day. A scheme requiring forty distinct credentials would be defeated within a month, probably by me writing them somewhere convenient, which would be worse than what I have.’

Lena nodded, and did not argue, which David noticed.

‘Tell them about the caching,’ he said. ‘You explained it to me once and it is the part I use constantly.’

‘The derived key is held for the working session, so I enter a password once and then move within that material without being asked again,’ Meera said. ‘Which matters because a session with a patient may involve me opening the entry at the start, adding to it during, and completing it afterward, and being challenged three times in an hour would turn a discipline into an irritation.’

‘And an irritation gets defeated,’ Lena said.

‘An irritation gets defeated by the person it protects, every time, and usually in a way nobody records.’ Meera paused. ‘But I want to describe the part that I did not expect, which is what happens in the two seconds while it opens.’

‘Go on.’

‘There is a brief pause while the key is derived from the password. Not long. Long enough to notice.’ She turned a hand over. ‘And in that gap I have done something deliberate, and I am now attending to this person and nobody else. Nothing else is open. Every other patient I have is closed, cryptographically, in the machine in front of me.’

‘That is the part I would not have predicted mattering,’ David said.

‘Nor would I, and I have come to think it is the most valuable thing about the arrangement,’ Meera said. ‘I trained in an era of paper files and a locked cabinet, and the walk to the cabinet was part of the practice even though nobody would have described it that way. When everything moved onto a screen, that walk disappeared and nothing replaced it. This replaced it, and I did not ask for it.’


## David: one password, because the trust does not come in grades

‘Mine will sound simpler than yours and I would like to explain why it is not simplicity,’ David said.

He described the shape of what he holds. A congregation of a few hundred, and beneath that the ordinary machinery of an organization: volunteer rotas, the food pantry schedule, building maintenance, the youth calendar, committee packets, outreach planning, and sermon drafts going back years.

‘None of that is encrypted,’ he said. ‘Not one item. And I want to say clearly that this was a decision rather than an oversight, because James, who volunteers with our technology, asked me the question directly and made me answer it.’

‘What was the answer?’

‘That the volunteer rota is meant to be seen. That is its function.’ David spread his hands. ‘A schedule that only I can read is a schedule that has failed. If I encrypted the food pantry roster I would be protecting nothing and obstructing eleven people who need to know when they are expected.’

‘And the other category,’ Lena said.

David was quiet for a moment, and both women let him be.

‘People come to my office and sit in a chair and tell me things they have told nobody,’ he said. ‘Not their spouse. Not their children. Frequently not a doctor. An addiction they have hidden for nine years. A marriage that ended in a way nobody in the building knows about. Abuse, sometimes many decades old. Grief they cannot say aloud in front of family because they are supposed to be the strong one. And doubt, which is the one people find hardest, because in a church a person doubting is afraid they are the only one.’

‘And you write it down.’

‘I write some of it down, and here is what I want to be understood.’ His voice did not rise; it slowed. ‘I write it because a person in crisis does not present their life once in a tidy sequence. They come back in three weeks and refer to something they said before and I must know what it was, and if I do not, they will conclude that they were not important enough to remember, and that conclusion will end our relationship and possibly their willingness to speak to anybody.’

‘So the record exists for their benefit.’

‘The record exists entirely for their benefit and it is the most dangerous thing in my office,’ David said. ‘Which is the whole difficulty. If I do not keep it I fail them in one way, and if I keep it carelessly I fail them in a worse one.’

Every pastoral entry is encrypted. All of them share a single password.

‘Explain that choice,’ Lena said. ‘Because it is the opposite of mine and I want to understand it rather than argue with it.’

‘Because the trust does not come in grades,’ David said simply.

He let that sit and then explained it.

‘Meera has tiers because her material has different degrees of consequence, and that is a clinical judgment she is qualified to make. If I built tiers I would be ranking my congregation.’ He shook his head slowly. ‘I would be deciding that this person's confession requires the stronger door and that person's requires the ordinary one. And whatever I told myself about risk assessment, what I had actually done is grade people by how much their trust deserves. I cannot do that. It is not a technical position, it is a pastoral one, and it is the closest thing to a principle I have about any of this.’

There was a pause. Meera had put her hand briefly over her mouth.

‘That had not occurred to me,’ she said, ‘and I am now going to think about my own tiers for some time.’

‘Yours are correct for your work,’ David said immediately. ‘I am not offering a criticism. A therapist assessing risk is doing her job. A pastor assessing whose confidence matters more is doing something else entirely.’

He admitted, without embarrassment, that the concept had confused him at first.

‘James explained it three times before I understood, and the failure was mine and it was a failure of imagination rather than of intelligence,’ he said. ‘I had a model in my head of a safe. One safe, one key, things inside. What he was describing was every folder having its own lock, and I kept asking where the outer lock was, and he kept saying there is not one, and I could not hear it.’

‘What made it land?’

‘He asked me what I do with the yellow pages.’ David gestured off camera. ‘I keep a legal pad. On a Sunday I make notes during the day and some are about the roof and some are about a man who told me something terrible in the car park. And James asked what I do when someone comes into the office while that pad is on the desk.’

‘You turn it over,’ Lena said.

‘I turn it face down. Every time. Without deciding to.’ David nodded. ‘And he said: you already do per-item protection. You do it forty times a week with your hands. You have simply never had software that could do it.’

‘That is a very good volunteer.’

‘He is an excellent volunteer and he fixes the projector, which makes him load bearing in ways the elder board does not appreciate.’ David smiled. ‘The other thing I use constantly is the lock screen. My office door does not have a good latch and people are accustomed to putting their head round it. So the moment I hear the corridor, the whole screen goes over and nothing can be read.’

‘Do you think about it?’

‘I have not thought about it in a year,’ David said. ‘My hand does it. Which is exactly what I want, because a protection I have to decide about is one I will fail to perform on the day it matters.’


## Lena: one password per source, and no convenience anywhere

‘Mine is the strictest and I want to say at the outset that it is not because I am more serious than either of you,’ Lena said. ‘It is because my failure mode is different, and it is worth being precise about how.’

‘Go on,’ said David.

‘If Meera's material is exposed, patients are harmed, seriously, and it may end her practice. If yours is exposed, people in your congregation are humiliated and some relationships never recover.’ She said this without softening it. ‘If mine is exposed, a person goes to prison, and in two cases in my career worse than that. And the distinguishing feature is that the harm falls on somebody who is not me and who took the risk on my assurance.’

‘Yours falls on them too,’ David said quietly.

‘Mine falls on them and there is a specific difference, which is that my adversary is not accident.’ Lena leaned slightly forward. ‘Meera is protecting against theft, loss, and carelessness. Those are real and they are largely random. I am protecting against somebody who wants the material, who knows it exists, and who has legal and technical resources. That changes the design, and it should not change yours, because designing for my adversary would make your working life miserable for no benefit.’

She described the arrangement. One page per investigation, one page per source beneath it, and every entry belonging to a source encrypted under that source's own password.

‘Never reused,’ she said. ‘Not once, not between two sources on the same story, not between a source and anything else I own. That is the discipline and it is the entire point of the arrangement.’

‘Why does reuse matter so much,’ David asked, ‘if the password is a good one?’

‘Because of what happens if I am compelled.’ Lena said it flatly. ‘There are circumstances in which I may be required to produce a password, or in which producing one is the least bad available option. If that password opens one source, I have lost one source, which is catastrophic and survivable. If it opens everything, I have lost every person who has ever spoken to me, including people whose stories concluded years ago and who have no idea they are still exposed through me.’

There was a silence.

‘I had not considered that,’ Meera said. ‘That the people you protected in the past are still relying on you.’

‘They are relying on me forever and they do not know it, and that is the obligation that actually keeps me careful.’ Lena shrugged slightly. ‘A source from eight years ago has moved on. I have not. Their exposure sits in my folder for as long as I keep it.’

She explained the technical property that makes the compartments genuine.

‘Every entry is encrypted with a key derived from its own password, using a random salt generated for that operation. Which means that even if I had reused a password, two entries would not produce the same key.’ She was precise about it. ‘And a fresh random value is used for each encryption, so encrypting identical text twice produces different output, and nobody comparing my files can tell which entries resemble each other.’

‘Why does that last part matter?’ David asked.

‘Because the pattern is sometimes the story,’ Lena said. ‘If somebody can tell that two entries are near-identical, they may learn that I have two sources describing the same event, which is a fact worth a great deal to certain people and which the words themselves never had to leak.’

Meera raised the caching.

‘You do not use it.’

‘I do not, and I want to be fair about it, because it is the correct default and Meera is right to use it,’ Lena said. ‘For a clinician moving through a working day, being challenged repeatedly turns a discipline into an obstacle, and obstacles get removed. For me the calculation inverts.’

‘Because you want the friction.’

‘Because I want every single decryption to be a decision I made.’ She counted it. ‘I open one source's material perhaps twice a week. Not forty times a day. So the cost of entering a password each time is a few seconds, which is nothing, and what I get for it is that there is never a period during which something is open because it was opened earlier and I forgot.’

‘Convenience is the enemy,’ David said.

‘Convenience is the enemy in my threat model specifically, and it is a friend in yours,’ Lena said. ‘That is the thing I would most want people to take from this. The same option is correct for Meera and wrong for me, and a tool that decided the question for both of us would have to be wrong for one of us.’

‘And the plaintext?’ Meera asked. ‘I know the answer and David may not.’

‘It exists only in the machine's working memory while an entry is open, and it is never written to the disk in readable form,’ Lena said. ‘Which is why closing something matters, and why the lock screen that David uses reflexively is doing real work rather than being a courtesy.’

David looked pleased.

‘I did not know that was why,’ he said. ‘I did it because of the door.’

‘The door is a perfectly good reason,’ Lena said. ‘It happens to also be the technically correct behaviour, which is the ideal situation and does not occur often.’


## What the three of them turned out to be doing

It was Meera who noticed it, which was reasonable, since noticing what people have in common when they think they disagree is most of her profession.

‘May I say something about all three of us,’ she said. ‘Because I think we have just described three incompatible systems and one identical experience, and the experience is the interesting part.’

‘Say it,’ said Lena.

‘None of us casually opens the protected material.’

She let that sit.

‘I have three passwords, David has one, Lena has forty. Those are genuinely different designs and none of them is a compromise toward the others.’ Meera counted on her fingers. ‘But all three of us have described the moment of opening as an act. Something we do rather than something that happens. And I do not think any of us adopted this arrangement in order to obtain that.’

‘I certainly did not,’ David said. ‘I adopted it because James told me to.’

‘And what does the act mean to you?’

David thought about it properly, which took a moment.

‘Honouring what was given,’ he said. ‘That is the closest I can get. When I open one of those entries, I am touching something a person handed me at considerable cost, and the small deliberate action reminds me of that at the exact moment I am about to read it. I would not have designed that. I would have said it was sentimentality. It is not. It changes how I read what is there.’

‘Mine is attention,’ Meera said. ‘Which sounds similar and is not. It is not reverence, it is focus. When that entry opens I am with one person, and nothing else is available to me, and that turns out to be clinically useful in a way I could not have anticipated. Divided attention in this work is not a minor inefficiency. It is how you miss the thing you were supposed to catch.’

‘Mine is discipline,’ Lena said, ‘and it is the least emotional of the three and I have started to suspect that is my own limitation rather than a virtue.’

‘Say what you mean by it.’

‘Every decryption is a moment where I confirm that I intend to be handling this person's material right now, in this room, on this machine, with this door closed.’ She paused. ‘Which is an operational check. But listening to both of you I notice that I have never once described it as anything other than operational, and that the thing I am checking is whether I am being careful with a human being.’

There was a short silence on all three windows.

‘I want to test the counterfactual,’ Meera said, ‘because otherwise this is just three people agreeing pleasantly.’

‘Go.’

‘Suppose everything were encrypted with one password. Whole vault, one door. Would any of this survive?’

‘No,’ said Lena, immediately.

‘No,’ said David, a beat later. ‘And I can say why in my own terms. If I entered the same password to see the food pantry rota, then by the time I reached the pastoral material the action would be worn out. It would be what I do to start work rather than what I do to approach a confidence.’

‘That is exactly what happened to me in my first six weeks,’ Meera said. ‘I described it earlier as a security problem, and it was, but the real damage was that the boundary evaporated. I still had encryption. I no longer had a threshold.’

‘Those are different things and almost nobody separates them,’ Lena said. ‘Encryption is a property of stored data. A threshold is a property of a working practice. Whole-vault encryption gives you the first and destroys the second, because a boundary that everything sits behind is not a boundary between anything.’

‘And per-entry gives you both,’ David said.

‘Per-entry gives you both, and I would go further,’ Lena said. ‘The threshold is the part I would fight hardest to keep, and I am the one in this conversation with the actual adversary. If I somehow knew my machine could never be seized, I would still want the material behind separate doors, because I would still want to be someone who has to decide to open it.’


## The same machinery, understood at three depths

‘Since we have twenty minutes,’ Meera said, ‘I would like Lena to explain what is actually happening, and I would like David to interrupt whenever it stops making sense, because I think how the three of us hold this information is itself the interesting thing.’

‘I will interrupt constantly,’ David said. ‘I have made peace with it.’

Lena took it in order.

‘Four components. A cipher, a way of turning your password into a key, and two random values.’ She held up fingers off camera. ‘The cipher is AES-256-GCM. AES is very well studied and there is no practical attack on it, so nobody serious tries to break the cipher directly. The important part is the second half of the name, which means the encryption also detects tampering. If somebody alters the stored data, it fails to open rather than producing plausible wrong text.’

David raised a hand.

‘Say what that means for me.’

‘It means that if somebody changed a word in one of your pastoral notes, you would find out, because the entry would refuse to open rather than showing you something subtly different.’

David sat back.

‘That had not occurred to me as a risk and it is a horrifying one,’ he said. ‘A record of what a man told me, altered by one sentence, and me reading it back to him in three weeks.’

‘Which is why authenticated encryption matters and why explanations that only name the cipher leave out half of what you are getting,’ Lena said.

She moved on.

‘Your password is not the key. A password is short and chosen by a person, so it has nowhere near the strength of a proper key. So it goes through a function called PBKDF2, using SHA-256, run one hundred thousand times.’

‘That is the pause,’ Meera said.

‘That is the pause you described earlier, and the pause is the security.’ Lena was emphatic. ‘Deriving one key takes a noticeable fraction of a second on your machine. Somebody guessing passwords has to pay that same cost for every single guess. Without it, an attacker tests enormous numbers per second. With it, that collapses by orders of magnitude.’

‘So the delay is not a cost,’ David said slowly. ‘It is the product.’

‘It is the product, and you have just put it better than I usually do.’

‘And the two random values?’

‘One is called a salt, sixteen bytes, generated fresh for each encryption and stored alongside the data without being secret.’ Lena anticipated the question. ‘It is not hidden because hiding is not its job. Its job is to make sure that guessing work done against one entry is useless against any other, and that the same password on two entries produces two entirely different keys.’

‘Which is why my compartments hold even if I made a mistake,’ she added.

‘And the second value?’

‘Twelve bytes, used once per encryption, which ensures that encrypting identical content twice produces different output, so nothing about the relationships between entries leaks.’

Meera came in.

‘I want to say what those words are to me, because it is different from what they are to Lena,’ she said. ‘I know them because I had to. Compliance obligations forced me to be able to describe how my records are protected, and I could not do that with the word secure.’

‘Can you explain them?’

‘I can explain them to an auditor, in a sentence each, and I have,’ Meera said. ‘I could not implement any of it and I could not evaluate whether it was implemented well. What I can do is name the mechanism, which is a genuine level of understanding and not a pretence at a deeper one. A vague answer is already a warning sign. A precise answer at least gives me something to check.’

David laughed, a little ruefully.

‘And I am the third level,’ he said, ‘and I would like to defend it.’

‘Defend it.’

‘I do not understand the mathematics. I will not understand the mathematics. I am sixty-two and I am not going to spend the time I have left learning number theory when I could be visiting people in hospital.’ He was entirely comfortable saying this. ‘What I understand is the principle, and I would put it like this: each note is locked on its own, and only the person with that password can open it, and nobody who holds the file without the password can read a word of it.’

‘That is accurate,’ Lena said.

‘Is it enough?’

‘It is enough to make correct decisions with, which is the only test that matters,’ Lena said. ‘You know that the password is the thing protecting it, so you know to choose a good one and not to write it on the desk. You know the file alone is not enough, so you are not frightened of backups. You know that closing something matters, which is why your hand goes to the lock. Every practical consequence follows from what you just said.’

‘And the parts I do not know?’

‘Are parts you would be trusting somebody about either way,’ Lena said. ‘Understanding the mathematics would not change that. The people who genuinely verify implementations are a small population, and everybody else is choosing whose account to accept. You have simply chosen honestly rather than pretending.’

Meera was smiling.

‘That is the most generous thing I have heard you say.’

‘I am not being generous, I am being accurate,’ Lena said. ‘Half the security incidents I have reported on involved somebody who understood the terminology and did something foolish anyway. David has never once been tempted to be clever. That is worth more than vocabulary.’


## Where the passwords actually live

‘Practical question,’ David said, ‘and I ask it because I got it wrong for a while and I would rather somebody say so than have people assume the difficult part is the software.’

‘Ask.’

‘Where do you keep the passwords?’

Lena answered first, because it was the least complicated version.

‘In a dedicated password manager, generated randomly, never chosen by me, and never stored in the same place as the material.’ She said it as a list. ‘Long enough that guessing is not a strategy anybody would begin. And critically, they are not written anywhere that would be seized alongside the machine, because a compartment whose key sits in the same drawer is not a compartment.’

‘You do not remember any of them.’

‘I remember one, which is the one that opens the manager, and I have written that down in a way I will not describe on a video call.’ She almost smiled. ‘Everything else I could not tell you under any circumstances, which is a property I selected on purpose.’

Meera's was less austere.

‘Three passwords, which is few enough that I know them,’ she said. ‘They are long, they are not derived from anything about my life, and they exist in a password manager as well, because knowing something is not a backup.’

‘Say that again,’ David said. ‘That sentence is the one I needed.’

‘Knowing something is not a backup.’ Meera repeated it slowly. ‘I know my three. I am also a human being with a brain that will one day be tired, ill, or seventy-eight. If the only copy of a credential is in my memory, the record is one bad month away from being unreadable, and my patients would be the ones who lost it.’

David nodded, evidently relieved.

‘Mine was a legal pad,’ he said. ‘Not the password. A hint. Written in a way I thought only I would understand, in a drawer, in an office with a door that does not latch.’

‘And now?’

‘A password manager, which James set up, and one sealed envelope with the elder board's confidential records, which is a physical arrangement we already had for other things.’ He shrugged. ‘I did not invent a new procedure. I used one the church has used for forty years for the safe combination and the insurance documents.’

‘That is exactly right,’ Lena said, with more warmth than she usually deployed. ‘The best security practice is nearly always the one that attaches to a procedure the organisation already performs. New procedures are the ones that get abandoned.’


## The question nobody wants to be asked about

‘Which brings me to the thing I actually wanted to raise,’ David said, ‘and it is not comfortable.’

‘Say it,’ said Meera.

‘What happens to any of this when we are not here?’

There was a pause of a kind the call had not produced before.

‘I have been thinking about it for a year and doing nothing,’ David admitted. ‘Because it feels morbid, and because every time I sit down to write the instructions I get as far as the first sentence and find something else to do.’

‘I will go first because mine is the most constrained,’ Meera said. ‘Clinical records carry obligations that outlive me. There are requirements about retention and about transfer of care, and if I died tomorrow my patients would need a clinician able to take over responsibly, which means the records have to be reachable by somebody.’

‘So what have you arranged?’

‘A designated colleague, named, who knows the arrangement exists and has agreed to it. Written instructions held with my professional documents, which state where the vault is and how to reach the credentials.’ She counted it. ‘And a distinction in the instructions between the clinical branch, which she is to take responsibility for, and my own reflective material, which is mine and which she is asked not to read.’

‘Will she honour that?’

‘She is a person I have known for eleven years and I believe so, and I have also accepted that I will not be present to enforce it, which is what makes it a request rather than a control.’ Meera turned a hand over. ‘Some things cannot be solved technically and pretending otherwise produces worse arrangements than admitting it.’

Lena's was different again.

‘Mine has an additional problem, which is that for me the safe outcome is sometimes that nobody can read it.’ She said it plainly. ‘If I am unavailable and somebody obtains my material, the people harmed are my sources. There is no successor who inherits that relationship. A journalist who never spoke to them cannot take custody of an obligation those people made to me personally.’

‘So the instruction is destruction?’

‘For some compartments, yes, and it is written down, and my editor holds it.’ Lena was matter of fact. ‘For others, where the source has explicitly agreed to a successor, there is a named person. But the default is not preservation, and I want to say that clearly, because in every other conversation about succession the assumption is that keeping the material is the responsible act. In my work it sometimes is not.’

David sat with that for a moment.

‘That is a harder decision than mine,’ he said, ‘and it makes mine easier to see.’

‘What is yours?’

‘My pastoral notes are not the church's property in any sense that matters, and I have never been able to say why until this conversation.’ He looked genuinely worked out by it. ‘They are held in trust for individuals. If I leave that role, the next pastor does not inherit them. He inherits the congregation and he will build his own relationships and they will tell him what they choose to tell him.’

‘So?’

‘So the instruction is that the pastoral branch is not passed on.’ David nodded slowly, as though hearing himself decide. ‘The administrative material transfers entirely, and it should, because that belongs to the church. The counselling record does not, because the person who gave it gave it to me.’

‘You have just written the first sentence,’ Meera said.

‘I have written the first sentence in a video call with a psychiatrist and a Swedish journalist, which is not how I imagined it,’ David said, ‘and I am going to write the rest of it this evening before I lose it.’

‘Write it before the roof man,’ Lena said.

‘The roof man can wait four minutes,’ said David. ‘He has waited three weeks.’


## What each of them took away, before the roof man arrived

At twenty past four David said he had eight minutes and asked whether he could say something first.

‘Of course.’

‘I came into this expecting to be the least sophisticated person in the conversation, and I was, technically, and I want to say that it did not matter.’ He was direct about it. ‘What I got from this is not information. It is that my arrangement is not naive. I have been quietly wondering for a year whether one password for everything pastoral was a shortcut I had taken because I did not know better.’

‘It is not,’ Lena said.

‘I understand that now, and I understand it because you told me your reasons for doing the opposite and they do not apply to me.’ He nodded slowly. ‘That is more useful than being told I was right. Being told I was right would have been a courtesy. Understanding why the strictest person here would not recommend her own system to me is something I can actually rely on.’

Meera went next.

‘Mine is uncomfortable and I am going to say it anyway,’ she said. ‘David, when you said that building tiers would mean ranking your congregation, something moved in me that I have not resolved and will not resolve today.’

‘I was not criticising your tiers.’

‘I know, and my tiers are clinically defensible, and I would defend them to a regulator without hesitation.’ She paused. ‘And I am going to sit with the fact that I have three categories and that I decided which patient goes in which. Legally that is risk assessment. Something else is also true about it and I have been careful not to look at that until an hour ago.’

‘Will you change it?’

‘Probably not. Possibly. What I will do is stop treating it as a purely technical decision, which is how I have been treating it for two years.’ She turned a hand over. ‘Privacy has been an obligation for me. This afternoon it has also been a moral question, and those are not the same and I had allowed them to become the same.’

Lena went last, and took longer than either of them.

‘I have thought about encryption for fifteen years and almost entirely in one register,’ she said. ‘Threat, adversary, capability, exposure. Which is the correct register for my work and I am not abandoning it.’

‘But.’

‘But I have listened to a pastor describe unlocking a file as honouring something a person handed him, and a clinician describe it as the moment she becomes present for somebody, and I have realised that I have been performing the same act for fifteen years and calling it operational discipline because that was the only vocabulary I had.’ She was matter of fact, which somehow made it heavier. ‘I am not going to start describing my work in those terms. I am going to remember that the thing I am protecting is a person who trusted me, rather than a category of data, and I suspect that will make me better at it rather than softer.’

‘That is the same conclusion from a different direction,’ Meera said.

‘It is the third version of one sentence and none of us said it the same way,’ Lena agreed. ‘Which I think is the actual finding.’

David checked something off camera and stood.

‘The roof,’ he said. ‘Thank you both. I would like to do this again and I would like Meera to arrange it, because I still do not know how any of this works.’

‘I will arrange it.’

‘And if either of you is ever in Atlanta,’ he said, ‘the door is open, and I will turn the pad face down before you come in.’


## Protection shaped like the work

What that conversation demonstrates is not that one password strategy is correct. Three professionals with serious obligations arrived at three genuinely incompatible schemes, and each was right for the person who chose it. A clinician working through forty patients uses a small number of tiers because a scheme requiring one credential per person would be defeated within a month by the very person it protects. A minister uses a single password across all pastoral material because grading it would mean grading the people who gave it to him, which is a pastoral impossibility rather than a technical one. A reporter uses one password per source and never reuses any, because her adversary is deliberate rather than accidental and because the people she protected years ago are still relying on her without knowing it.

No uniform model can accommodate those three. That is the argument for granularity in a sentence: the correct shape of protection is a property of the work rather than of the software, and only a mechanism that lets the user express their own judgment can fit all three. Whole-vault encryption forces the same shape on everybody and therefore fits nobody exactly, which is why people quietly work around it, keep sensitive material outside the system, or stop noticing the ceremony entirely.

The second finding is the one none of them designed for. All three described the act of opening a protected entry as meaningful, and used three different words: attention, honouring, discipline. That effect depends entirely on most of the workspace being open. When a password guards a calendar as well as a confession, the action becomes routine within weeks, and what remains is encryption without a threshold. Encryption is a property of stored data. A threshold is a property of a working practice. The granular model produces both, and a uniform model produces the first while quietly destroying the second.

Underneath sits machinery that all three understand to different depths, all of them adequately. AES-256-GCM protects the content and detects alteration, so a tampered entry fails to open rather than presenting plausible wrong text, which for anyone who acts on their own records is a guarantee worth as much as confidentiality. PBKDF2 with SHA-256 at a hundred thousand iterations converts a human password into a key deliberately slowly, so that the brief pause a user notices is the same cost imposed on every guess an attacker makes. A random sixteen-byte salt per encryption destroys precomputation and ensures that two entries never share a key even if they share a password. A random twelve-byte value per encryption ensures identical content never produces identical output, so relationships between entries do not leak. Decrypted text exists only in working memory while an entry is open, which is why closing it, and covering the screen when somebody appears at the door, is doing real work rather than being a courtesy.

The three depths of understanding on that call were all sufficient. One person could recite the parameters and reason about them. One could name them accurately for an auditor and knew the limits of her own understanding. One could state the principle in a sentence, that each note is locked separately and only the password opens it, and every practical decision he needed to make followed from it. The last of those is not a lesser grasp. It produces correct behaviour, which is the only measure that matters, and it is held by somebody who has never been tempted to be clever.

Per-entry encryption reads on a feature list as a technical refinement, a matter of key management and blast radius. What it actually provides is a way for a person to express, in software, a judgment they were already making with their hands, their voice, and a legal pad turned face down on a desk. The best security model is not the strongest one available. It is the one shaped like the work it protects, because that is the only kind anybody keeps using.


## FAQs

### What is per-entry encryption and how does it differ from encrypting everything?

Whole-application encryption places one boundary around all content, so a single password grants access to everything and all material is treated as equally sensitive. Per-entry encryption allows each item to carry its own protection, derived from its own password, so opening one thing opens precisely that thing. The immediate consequence is that the user rather than the software decides how much a single compromise exposes. The less obvious consequence is that most of a workspace can remain open, which is what preserves the meaning of the act of unlocking the part that is not. Whether that granularity is used heavily or lightly is a decision for the person holding the material, which is the point: the mechanism expresses a judgment rather than imposing one.

### Why is it a problem to encrypt everything with one password?

Because uniform ceremony produces uniform inattention. A password entered dozens of times a day to reach a calendar, an invoice, or a scheduling note becomes muscle memory within weeks, and muscle memory is precisely what should not stand between a person and their most consequential material. Users who have tried it describe unlocking something without any awareness of having done so. Encryption remains present in that arrangement, but the psychological boundary has evaporated, and the boundary was doing work nobody had accounted for. The failure is gradual and therefore easy to miss, since nothing breaks and no warning appears. People generally notice only when they catch themselves opening something consequential without having registered the action at all.

### Should most entries actually be left unencrypted?

For most professionals, yes, and it is a deliberate design rather than laziness. Scheduling notes, administrative records, professional development material, meeting logistics, and anything intended to be shared all gain nothing from protection and lose something by carrying it. A volunteer rota that only its author can read has failed at its purpose. Encrypting the genuinely sensitive minority with real rigour, while leaving the routine majority open, produces better practical security than a uniform scheme that people work around within a month. Practitioners who protect everything initially commonly reverse the decision within a couple of months, and describe the reversal as improving both their security and their working day. Leaving the routine majority open is what preserves the meaning of protecting the rest.

### How many different passwords should someone use?

There is no single correct answer, and the three common patterns are all defensible for different reasons. A small number of tiers grouped by consequence suits somebody moving through many items daily, since one credential per item would be abandoned quickly. A single password across one category suits somebody for whom the material carries uniform significance. One password per compartment, never reused, suits anybody protecting distinct third parties from a deliberate adversary. The determining question is what a single compromise should be allowed to expose, and who bears the consequence. Whatever the answer, it should be one the person will actually sustain, since a scheme abandoned after six weeks provides less protection than a modest one maintained for years.

### Why would a professional deliberately refuse to grade their material?

Because grading material sometimes means grading people. A clinician assigning risk levels to records is exercising professional judgment about consequence, which is part of the job. A minister assigning tiers to pastoral confidences would be deciding whose trust merits the stronger door, which is a different act entirely regardless of how it is framed. Where the significance of what was shared is uniform by principle rather than by measurement, a single password across the category is the coherent choice, and it is a considered position rather than a simplification. Recognising when a technical decision has become an ethical one is itself valuable, and people in caring professions frequently arrive at that recognition before they can articulate it.

### What is session password caching and when should it be used?

It holds the derived key in memory for the duration of a working session, so that a password entered once allows continued work within that material without repeated challenges. It suits anybody accessing protected entries frequently through a day, since being challenged repeatedly converts a discipline into an obstacle and obstacles get removed by the people they protect. The general principle is that protection tolerable at the frequency it is actually encountered gets maintained, while a stricter scheme that irritates people gets circumvented in ways nobody records. It also means a protected entry can be opened, added to during an appointment, and completed afterward without three separate challenges breaking the flow of the work.

### When is it better not to use caching?

When protected material is opened rarely and the consequence of exposure is severe. Somebody accessing a given compartment twice a week pays only a few seconds by entering a password each time, and receives in exchange the guarantee that nothing is ever open merely because it was opened earlier and forgotten. The calculation inverts relative to frequent access: friction that would be intolerable forty times a day is negligible twice a week, and the deliberateness it enforces is exactly what a high-consequence workflow wants. The general test is to compare the number of seconds spent entering a password against the length of time something would otherwise remain open unattended, which for infrequent access strongly favours entering it each time.

### What does the brief pause when unlocking an entry actually represent?

It is the key derivation running, and it is the security rather than a cost. Converting a password into a key deliberately takes a noticeable fraction of a second, which means anybody attempting to guess passwords pays that same cost for every candidate they try. Users who understand this generally stop experiencing the delay as friction. Many also report that the pause performs a second, unintended function: it marks a transition, giving attention somewhere to shift before the material appears. Anyone tempted to regard the delay as a shortcoming has the relationship backwards: a derivation fast enough to feel instantaneous would be fast enough for an attacker to attempt an enormous number of guesses.

### Why does the act of unlocking matter psychologically?

Because it converts access into a decision. Professionals across very different fields describe the same effect in different vocabulary: focus, honouring what was given, operational discipline. In each case the deliberate action arrives immediately before reading something consequential and changes how it is read. The effect depends on contrast: it only exists because most of the workspace is open, so reaching the protected part is distinguishable from ordinary work. Uniform protection removes the contrast and with it the effect. Practitioners describe the effect using different vocabulary depending on their field, which is a reasonable sign that they are each describing something real rather than repeating a claim they were given.

### What is the difference between encryption and a threshold?

Encryption is a property of stored data, describing whether it can be read without a key. A threshold is a property of a working practice, describing whether reaching something requires a distinct act. Whole-vault encryption provides the first and quietly removes the second, because a boundary everything sits behind is not a boundary between anything. Per-entry protection provides both. Practitioners who lost the threshold by encrypting everything describe still having encryption and no longer having a practice, which took them some time to articulate. Keeping the two ideas separate is useful when evaluating any tool, since a product can be entirely honest about the first while providing nothing at all resembling the second.

### Which cipher is used and why does the mode matter?

AES-256-GCM. AES-256 is extensively studied with no practical attack against it, so a serious adversary attacks something else. GCM is the mode, and it provides authenticated encryption: confidentiality and integrity together. Content cannot be read without the key, and content cannot be altered without detection, so a tampered entry fails to open rather than presenting plausible but incorrect text. For anyone who acts on the contents of their own records, silent alteration would be considerably more dangerous than loss, which makes the mode as important as the cipher. Explanations that name only the cipher therefore describe half the protection, and the omitted half is frequently the one that matters most to somebody who acts on the contents of their own records.

### What does PBKDF2 with one hundred thousand iterations accomplish?

It converts a human-chosen password into a cryptographic key, deliberately slowly. A password contains far less entropy than a proper key, so the derivation must be expensive enough that guessing becomes impractical. Using SHA-256 across one hundred thousand iterations makes each derivation take a noticeable fraction of a second on the user's machine and imposes the same cost on every guess an attacker makes, collapsing their throughput by orders of magnitude. The parameter is what turns a short password into something worth attacking rather than something trivially broken. Users who understand this generally stop experiencing the wait as an inconvenience, because it is the visible portion of a cost being imposed far more heavily on anybody attempting to guess.

### Does strong key derivation make a weak password acceptable?

No, and this is the limitation worth understanding clearly. Key derivation multiplies the cost of each attempt and creates no security where the password itself contributes none. Any password appearing in a common list is tested early regardless of iteration count. The practical conclusion is that password quality remains the decisive factor, and that generated random passwords of substantial length are the highest-value operational decision available. Derivation then converts an already impractical search into one nobody would begin. This is why password generation, rather than any parameter of the encryption itself, is the decision that determines whether everything else has anything to protect.

### What do the random salt and initialization vector do?

The salt is sixteen bytes generated fresh for each encryption and stored alongside the data without being secret. Its purpose is not concealment but the destruction of precomputation: work done guessing against one entry is useless against another, and the same password on two entries produces entirely different keys. The initialization vector is twelve bytes used once per encryption, ensuring that identical content never produces identical output. Without it, someone holding the files could tell which entries resemble each other, and in some situations that pattern is itself the sensitive information. Both values are stored alongside the encrypted data without being secret, since their function depends on being unique per operation rather than on being concealed.

### Where does decrypted content exist while an entry is open?

Only in the machine's working memory, and never written to disk in readable form. This is why closing an entry matters and why covering the screen when somebody enters the room is doing real work rather than being a courtesy. It also means that the ordinary discipline of locking the interface when stepping away is directly aligned with the technical design, which is an unusually convenient coincidence between what people do instinctively and what the architecture actually requires. It also means that finishing with a protected entry and closing it is a meaningful act rather than housekeeping, and is worth building into a working routine rather than leaving to chance.

### How does the lock screen complement per-entry encryption?

They address different exposures. Encryption protects stored material against somebody obtaining the files. The lock screen protects open material against somebody entering the room, covering the entire viewport and blocking all interaction until the session is authenticated again. Practitioners with poorly latched office doors describe using it reflexively, without deciding to, which is the intended outcome: any protective action requiring a conscious risk assessment will be slower than the situation it exists for. Together they cover the two realistic ways sensitive material becomes visible. Building the habit until the gesture is automatic is what makes it reliable, since a measure requiring a conscious decision will always be slower than the situation it exists to handle.

### How should password strategy account for legal compulsion?

By ensuring that any single password, if produced, exposes as little as possible. Circumstances exist in which providing a credential is required or is the least damaging available option, and the design question is what that credential unlocks. Compartmentalisation by source, client, or matter means one such event costs one compartment rather than everything. This matters particularly because past confidences remain exposed indefinitely: somebody who shared information years ago has moved on, while the person holding their material has not. Writing down which compartments exist, and what each one would cost if opened, makes the strategy reviewable rather than something held vaguely in mind.

### Does per-entry encryption work alongside sections within an entry?

Yes, and the combination is what makes a single entry able to hold different kinds of content coherently. A protected entry can contain sections separating a factual record, professional reasoning, personal observations, and administrative details, each with its own text and attachments. Unlocking the entry makes all of it available together, which is appropriate because those parts describe one situation and are most useful read as a whole. The encryption boundary sits at the entry because the entry is the unit of confidence. That also means the sections can hold quite different kinds of content, including a factual record and the writer's own reasoning, without either being exposed separately from the other.

### Is it necessary to understand the mathematics to use this responsibly?

No, and the useful test is whether someone's understanding produces correct decisions. A person who can state that each note is locked separately, that only the password opens it, and that the file alone reveals nothing will choose a strong password, avoid writing it somewhere visible, close entries when finished, and not fear making backups. Every practical consequence follows from that principle. Understanding the underlying mathematics would not change any of those behaviours, and the population that genuinely verifies implementations is very small. What matters far more than vocabulary is a settled disposition against being clever, since a substantial share of real incidents involve somebody who knew the terminology and improvised anyway.

### What are the three useful levels of understanding?

The first can reason about the mechanism and evaluate parameters, which suits people who assess tools professionally. The second can name the mechanism accurately and describe it to an auditor or regulator while recognising the limits of their own expertise, which is what most regulated professionals actually need. The third holds the principle plainly without the vocabulary and acts correctly on it. All three are adequate for their contexts. What is not adequate is a vague understanding expressed in confident language, since vagueness is the reliable warning sign. Choosing honestly among these, rather than performing a depth one does not have, is itself the mark of somebody handling sensitive material responsibly.

### Why is a precise answer about encryption more trustworthy than a reassuring one?

Because precision gives you something to examine. A named cipher, a named derivation function with a stated iteration count, and stated salt and vector sizes can be checked, compared, and questioned. Phrases suggesting strength without naming anything cannot. A precise answer can still describe a poor implementation, so specificity is not proof, but vagueness is already a warning. Professionals in regulated fields learn this quickly, since a regulator asking how records are protected will not accept an adjective. The same test applies outside regulated work: any description that cannot be checked against anything is a description designed to end a conversation rather than answer it.

### How does someone decide what to encrypt when starting out?

By asking who is harmed if a particular item becomes visible, and whether that person is somebody other than themselves. Material whose exposure would cause inconvenience or embarrassment to its author rarely justifies protection. Material that would harm a patient, a parishioner, a source, or a client almost always does. Starting with a narrow, clearly defined category and leaving everything else open produces a workable system immediately, and the boundary can be widened later without restructuring anything. Reviewing the boundary once a year is usually enough, since the categories of material a professional handles change slowly even when the volume grows quickly.

### Can different people in the same profession reasonably choose different approaches?

Yes, and the three-way conversation that prompted this article is the demonstration. Two clinicians may reasonably differ on tiers. Two ministers may reasonably differ on whether a single category password is right for their setting. The determining factors are the adversary being protected against, the frequency of access, who bears the consequence of exposure, and what a single compromise should be permitted to cost. A strategy that suits an air-gapped investigative workflow would make an ordinary clinical day miserable for no benefit, and the reverse is equally true. Comparing approaches with somebody in a different field is frequently more useful than comparing with a peer, because the differences are large enough to expose the reasoning behind each choice.

### Where should the passwords for encrypted entries be kept?

In a dedicated password manager, generated randomly rather than invented, and stored somewhere that would not be obtained alongside the material itself. A compartment whose key sits in the same drawer as the vault is not a compartment. The practical rule most practitioners converge on is that remembering a password is not a backup: a credential existing only in someone's memory is one illness, one bad month, or one accident away from making the record unreadable, and the people harmed by that are usually the ones the record was kept for. The one credential that must be remembered, which opens the manager itself, deserves proportionate care and a physical fallback stored somewhere that would survive the loss of a device.

### How many passwords can somebody realistically manage?

Fewer than they think if the passwords must be memorised, and effectively unlimited if a manager holds them. Practitioners who keep a small number tend to know them and also store them, treating memory as convenience and the manager as the record. Those running one credential per compartment generally cannot recite any of them, which is a property they have selected deliberately. The determining factor is access frequency: a credential used several times daily will be memorised whether or not that was intended, while one used twice a month never will be. A scheme that fails on this point does not fail visibly; it fails by being quietly replaced with something weaker that nobody records having adopted.

### What is the best way to introduce a new security practice into an organisation?

Attach it to a procedure the organisation already performs. Groups that already hold a sealed envelope for a safe combination, insurance documents, or bank details can extend that arrangement to credentials without inventing anything, which means it inherits an existing habit and existing custody rules. New standalone procedures are the ones that get abandoned within a year, usually because nobody owns them and nobody notices when they lapse. The most durable practice is rarely the most sophisticated one available; it is the one that fits what people already do. It also means somebody other than the person who introduced it already understands the custody rules, which is what allows the practice to survive a change of personnel.

### What happens to encrypted material when the person holding it is unavailable?

That depends entirely on whose obligations the material carries, and the answer differs sharply by profession. Clinical records carry duties that outlive the clinician, so a named colleague, written instructions, and a documented route to the credentials are appropriate. Material belonging to a professional relationship that cannot be transferred, such as pastoral confidences given to an individual rather than to an institution, may reasonably not be passed on at all. In some journalistic contexts the responsible instruction is that certain compartments should not survive. The common thread is that the answer follows from whose obligations the material carries, which is a question worth answering explicitly rather than leaving to whoever finds the machine.

### Should personal reflective material be treated differently from professional records in succession planning?

Usually yes, and separating them structurally from the beginning makes the distinction executable rather than aspirational. Keeping professional records in one branch and personal reflection in another means instructions can address them separately: one branch transfers to a named successor with full access, the other carries a request that it not be read. That request cannot be enforced technically once credentials have been handed over, which is worth acknowledging honestly rather than pretending otherwise, and it is still considerably better than leaving the question unaddressed. Separating the two branches from the start costs nothing and turns an awkward conversation into a straightforward instruction that names one branch and excludes another.

### Why is writing succession instructions so commonly postponed?

Because the exercise requires imagining one's own absence, which people avoid, and because the first sentence is genuinely difficult to write. Practitioners frequently report getting as far as opening a document and then finding something else to do, repeatedly, over months or years. The task becomes tractable once it is broken into the questions it actually contains: what exists, where it is, who should reach it, who should not, and what should happen to anything nobody inherits. Answering those separately is far easier than composing a document. Setting aside twenty minutes with those five questions written down in advance is usually enough to produce a workable first version, which can then be refined at leisure.

### Does per-entry encryption make backups more complicated?

No, and it makes them psychologically easier. Because encrypted entries remain unreadable without their passwords, a backup copy carries the same protection as the original, so copying the vault folder to another drive or to removable media introduces no additional exposure. Practitioners who understand that the file alone reveals nothing tend to keep better backups than those who are vaguely afraid of duplicating sensitive material. The credentials, of course, need their own arrangement, kept separately from the copies they unlock. Keeping at least one copy somewhere physically separate is worth the small effort, since local storage protects against loss of a service and not against fire or theft.

### Can an encrypted entry be shared with a colleague when necessary?

Sharing is a deliberate act rather than something that happens automatically, which is the appropriate arrangement for this kind of material. Providing access means providing the relevant credential, or exporting the specific content that needs to be handed over, both of which are decisions made consciously about one item. Nothing propagates by default, and no shared workspace quietly exposes a compartment to somebody who was never intended to see it. Most accidental disclosures in professional settings occur when systems do exactly what they were designed to do. Where sharing is likely to recur, agreeing in advance which categories may be handed over and to whom removes the need to make that judgment under pressure.

### How does granular encryption interact with regulatory obligations?

It generally helps, because regulators asking how records are protected want specific answers rather than adjectives, and a granular scheme allows a practitioner to describe precisely which categories are protected and by what mechanism. Being able to name the cipher, the derivation function, the iteration count, and the per-item scope is a materially stronger position than describing a system as secure. Specific regulatory requirements about retention, custody, and access remain the responsibility of the practitioner and their jurisdiction rather than a property of any tool. Recording which categories are protected and why, as a short written note, also makes an audit conversation considerably shorter than reconstructing the reasoning on the spot.

### What should somebody do first if they hold sensitive material and no system?

Define one narrow category, protect it properly, and leave everything else open. Attempting to classify an entire archive before starting is the most common reason people never start. The initial category should be the material whose exposure would harm somebody other than its author, which is usually a small and obvious set. Generating a strong password, storing it in a manager, and encrypting that category takes an afternoon, and the boundary can be widened later without restructuring anything that already exists. Starting narrow also produces an immediate demonstration that the arrangement works, which does more for adoption than any amount of planning.

### Does using different approaches within one profession indicate that somebody is wrong?

No. Two clinicians may reasonably differ on whether to use graduated tiers. Two ministers may reasonably differ on how to treat counselling records. The determining variables are the adversary, the access frequency, who bears the consequence of exposure, and what a single compromise should cost. A scheme suited to protecting sources from a deliberate adversary would make an ordinary clinical day unworkable for no benefit, and a scheme suited to forty appointments a week would be inadequate for source protection. Both facts are true simultaneously. What would be a mistake is adopting a scheme because it sounds rigorous rather than because it matches the actual obligations and access patterns of the work.

### What is the strongest reason to prefer granular protection over a single boundary?

That the correct shape of protection is a property of the work rather than of the software. Three professionals with serious obligations can arrive at three genuinely incompatible and individually correct password strategies, and no uniform model can accommodate all of them. A single boundary imposes one shape on everybody and therefore fits nobody precisely, which is why people quietly work around it, keep the most sensitive material outside the system entirely, or stop noticing the ceremony. Granularity lets the judgment the professional is already making be expressed in the tool. It also means the arrangement can evolve as a practice changes, without a restructuring exercise every time the shape of the obligations shifts.


### Does anything about the encrypted material remain visible without the password?

Structural information remains visible while content does not. Somebody holding the vault folder can see how many entries exist, roughly how large they are, when files were last modified, and which items carry protection. None of that reveals what any entry contains or how entries relate to one another, since the per-encryption random values prevent identical content from producing identical output. Accounting for that residue honestly is part of a serious assessment, and it is why operational measures such as controlling who can obtain a copy of the folder complement the cryptography rather than duplicating it. Anyone whose threat model includes a determined adversary should treat that structural residue as real information and plan around it rather than assume the encryption covers everything.

### How does someone verify that their material is genuinely protected?

By checking directly rather than accepting a description. Opening the vault folder shows the files as they exist on disk, and a protected entry appears as unreadable data rather than as words. Practitioners who have never done this frequently carry a low-grade unease they cannot name, and a single look resolves it permanently. The same instinct applies to network behaviour: confirming with the browser tools that nothing is transmitted converts a claim into an observation, which is a different kind of confidence entirely. Repeating the check occasionally, particularly after obtaining a new version, keeps the confidence current rather than resting on an observation made once a long time ago. It takes a couple of minutes and requires no expertise at all.

### What is the relationship between encryption and the practice of writing honestly?

They are more closely linked than a feature list suggests. People writing material they know could be read, even theoretically, tend to soften language, omit names, and produce records that are technically complete and substantively thin. That editing happens below conscious thought and cannot be corrected by resolve. Knowing that a particular entry is genuinely inaccessible removes the imagined reader, and practitioners consistently report that their notes become messier, longer, and considerably more useful once the modelling stops. The improvement is easiest to notice by rereading old records and asking whether they answer the questions their author actually has now, rather than whether they look complete.

### Should the same password ever be used for two related items?

Only when they would always be opened together and the consequence of exposing one is identical to exposing the other. Two entries about the same matter, the same client, or the same episode of care usually qualify. Two entries concerning different people almost never do, since sharing a credential merges compartments that were separate for a reason. The underlying question is not whether the items are related but whether a single compromise should reveal both, which is a decision about consequence rather than about topic. When in doubt, separating them costs almost nothing given a password manager, while merging two compartments that should have been distinct cannot be undone after an exposure. Erring toward separation is the cheaper mistake.

### How often should encryption passwords be changed?

Less often than intuition suggests, and only for a reason. Routine rotation on a schedule tends to produce weaker credentials, because people generate memorable variations rather than fresh random values, and it introduces opportunities for error during the change. A password should be replaced when there is cause: a suspected exposure, a device leaving the owner's control, or somebody who once had access no longer being entitled to it. Otherwise a strong generated credential is better left alone. Recording the reason alongside any change also helps, since a rotation performed for a specific cause is worth remembering and one performed out of habit rarely is.

### Is per-entry encryption useful for material that is not professionally sensitive?

Frequently, and the reasons are personal rather than regulatory. Journals, letters that will never be sent, financial planning, medical matters, notes about family difficulties, and anything a person would not want read casually all benefit from the same mechanism. The threshold effect applies equally: material behind its own door is approached deliberately, which suits reflective writing. There is no requirement that a category be legally sensitive before it is worth protecting, only that its exposure would matter to somebody. Many people find that a small personal branch protected this way becomes the place where the most useful writing happens, precisely because nothing about it is intended for anyone else.

### What is the most common mistake people make with granular encryption?

Encrypting everything at the start, which is the instinct of anybody taking the responsibility seriously and which reliably fails within about two months. The scheme becomes tedious, the ceremony becomes automatic, and the person either weakens their credentials or stops noticing what they are doing. The second most common mistake is the opposite: deferring the decision entirely because classifying an entire archive feels overwhelming. Both are avoided by protecting one clearly defined category properly and leaving everything else alone. Recognising the pattern early saves several months, since almost everybody who takes the responsibility seriously makes one of the two errors before settling into a workable arrangement.

### How should someone explain this arrangement to a client, patient, or parishioner?

Plainly and without technical vocabulary, since the person asking wants reassurance they can evaluate rather than terminology they cannot. A description covering the essentials might state that the notes are held on a machine in the room rather than on a company's servers, that each person's record is locked separately, and that only the holder of that record's password can open it. Every clause is checkable in principle and none of it requires the listener to trust a claim about mathematics they have no way to assess. Practising the explanation once, so it comes out plainly rather than being improvised, is worth the few minutes it takes, because the question tends to arrive at emotionally significant moments.

### Does having encrypted records complicate a professional handover between colleagues?

It makes the handover explicit rather than automatic, which is generally desirable for material carrying obligations to a third party. Transferring responsibility means transferring specific credentials for specific categories, which forces a conversation about scope: what the successor is taking on, what remains outside their responsibility, and what should not be passed at all. Handovers that happen implicitly, because a successor simply inherits access to everything, are the ones where material ends up with people who were never intended to hold it. Deciding the scope in advance, while nothing urgent is happening, produces far better outcomes than making the same decisions during a departure or an emergency.

### What single practice would improve most people's position immediately?

Generating passwords rather than inventing them, and storing them in a manager kept separately from the vault. Every other property of the system depends on the credential, and a memorable password chosen by a person is the weakest link in an otherwise strong arrangement regardless of how carefully everything else is configured. It takes minutes to change, requires no understanding of the underlying mechanisms, and converts an attack that might succeed into one that nobody would sensibly begin. Everything else in a well-designed arrangement is already working correctly, which means the credential is where almost all of the remaining risk actually sits.


### Can three people with incompatible strategies all be following best practice?

Yes, and treating that as a contradiction is the source of most bad advice in this area. Best practice in security is contextual by nature: it depends on the adversary, the access frequency, who suffers if something is exposed, and how long that exposure persists. A strategy protecting sources from a deliberate opponent, one protecting patients from theft and carelessness, and one protecting confidences given in a relationship of trust are three different problems that happen to use the same mechanism. The common ground is that each person reasoned from consequences rather than copying somebody else. Anyone offering a single universal recommendation in this area has usually not asked enough questions about the situation they are advising on.

### What is worth taking from a conversation between people in unrelated fields?

Usually more than a conversation between peers produces. Colleagues in one profession share assumptions so thoroughly that the assumptions never surface, whereas somebody with entirely different obligations will question a choice that had never been examined. Practitioners describe learning why the strictest approach in the room would not be recommended to them, which is more useful than being told they were right. The differences are what expose the reasoning, and the reasoning is the part that transfers between fields even when the practice does not. It is also worth seeking out deliberately rather than waiting for it to happen, since the people best placed to question your assumptions are rarely the ones sitting nearest to you.

### Where should a reader start after all of this?

With one decision rather than a plan: identify the category of material whose exposure would harm somebody other than yourself, and protect that category properly with a generated password stored in a manager. Leave everything else open. Notice, over the following weeks, whether the act of unlocking feels distinct from ordinary work, since that distinction is the signal that the boundary is doing what it should. Everything further, including tiers, compartments, succession instructions, and access policies, can be built once the first boundary is working. Getting one boundary genuinely right teaches more than any amount of planning, and it produces immediate protection for the material that most needed it.

