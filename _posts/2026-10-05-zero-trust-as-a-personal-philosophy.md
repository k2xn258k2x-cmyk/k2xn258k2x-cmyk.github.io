---
title: "Zero Trust as a Personal Philosophy"
description: "A cybersecurity consultant and an investigative journalist examine what it means to trust nothing by default."
date: 2026-10-05 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---


Zero trust began as an argument about network architecture, and the argument was mostly with a metaphor. For decades enterprise security was organized around a perimeter: a hard boundary with the dangerous world outside it and the trusted world inside. Get past the wall and you were, by definition, one of us. The model was intuitive, it mapped onto every physical security arrangement people already understood, and it failed comprehensively, because attackers stopped attacking walls and started acquiring credentials, and because the inside of the network filled up with contractors, laptops in cafes, acquired subsidiaries, and services talking to other services across boundaries nobody had drawn. The perimeter still existed. It had simply stopped corresponding to anything.

What replaced it is stated in three words that are easy to repeat and difficult to implement: never trust, always verify. No user, no device, no connection, and no request is trusted because of where it originates. Every access is authenticated, authorized, and scoped to the minimum required. The network is segmented so that a compromise in one place does not become a compromise everywhere. Trust becomes something granted narrowly, for a specific purpose, subject to continuous re-evaluation, rather than something conferred permanently by position. Implemented properly it is expensive, unglamorous, and considerably more effective than the thing it replaced.

![Zero Trust as a Personal Philosophy](/assets/img/feature-screenshot-placeholder.svg)

The framework has been discussed almost exclusively as an organizational concern, which is understandable, since organizations are where the budgets are. But the underlying insight has nothing intrinsically to do with corporate networks. It is a general observation about dependencies: every component you rely on is a component that can fail, be compromised, change hands, change policy, or behave in ways you did not anticipate, and the honest response is not to select more trustworthy dependencies but to require fewer of them. That reframing turns zero trust from a network policy into something closer to a personal discipline, applicable by anyone whose exposure is individual rather than institutional.
<!--more-->


For a considerable number of people, this is not an intellectual exercise. Journalists working with leaked material hold information whose disclosure sends other people to prison. Security researchers hold client vulnerability data that would be catastrophic in the wrong hands. Activists, lawyers, clinicians, and people simply living under governments with an active interest in their communications all face the same structural problem: their tools introduce dependencies, each dependency is a place where the guarantee can break, and most of those dependencies are invisible in normal use and only become legible after something has gone wrong.

The everyday version of the failure is not dramatic. A tool is chosen because it is good. It syncs, which requires a server, which requires an account, which introduces a company, which has employees, infrastructure providers, a jurisdiction, a legal exposure, an update mechanism, and a future that includes the possibility of acquisition. None of these is a scandal. Every one of them is a dependency the user did not select and generally cannot inspect. The user's actual security posture is now the composition of a dozen decisions made by strangers, and the only tool available for evaluating that composition is a policy document written by the party being evaluated.

The personal application of zero trust is therefore a question of counting. Not which vendor is most trustworthy, but how many separate parties must behave correctly, indefinitely, for the guarantee to hold. A tool that processes content on a server requires trust in the company, its staff, its hosting provider, its legal jurisdiction, and every future version of all of those. A tool that encrypts before transmission removes several of those but still requires trust in the implementation, the update channel, and the continued integrity of the client. A tool that never transmits at all, that runs from a file the user possesses, that writes to a folder the user chose, and that can be inspected in an afternoon, requires trust in the code and in nothing else. These are not marketing distinctions. They are different counts.

There is a second and less obvious dimension, which concerns time. Trust decisions are usually evaluated at the moment of adoption and rarely revisited, but the dependencies persist and the parties change. Software that verifies a license against a server has introduced a permanent operational relationship. Software that updates itself automatically has granted a standing capability to execute new code on the user's machine. Both are conveniences with a cost that is invisible on the day they are accepted and becomes visible only if something goes wrong, at which point every previous day of correct behaviour turns out to have proved nothing.

None of this argues for isolation as a lifestyle. It argues for making the count explicit, choosing deliberately where dependencies are worth their cost, and recognising that for certain categories of material the correct number of parties who must behave well is one, and that one is you. The people who apply this most rigorously are not ideologues. They are professionals who have calculated what a failure would cost somebody else, and who found the usual arrangements insufficient once the arithmetic was done honestly.


## Kreuzberg, on a Tuesday, in a bar chosen for its acoustics

The place had been a workshop of some kind before it was a bar, and whoever converted it had not tried very hard to disguise this, which was most of its appeal. Brick, a long zinc counter, filament bulbs at irregular intervals, and about nine tables spaced far enough apart that a conversation at one was inaudible at the next. It was the middle of the afternoon and there were four people in it, including the man behind the bar, who had put on something instrumental at a volume that filled the room without occupying it.

Suki Tanaka had chosen it, and Lena Johansson had understood the choice within about ten seconds of walking in, which was itself a small piece of information about both of them.

‘Corner table,’ Lena said, not as a question.

‘Corner table, back to the brick, sightline to both doors, and a soundscape that defeats a phone on the next table over.’ Suki was already sitting. ‘I would like to say I chose it for the beer.’

‘The beer is incidental.’

‘The beer is genuinely quite good, which I regard as a bonus rather than a criterion.’

Lena sat. She was tall, in her late thirties, dressed with the deliberate unremarkability of a person who has spent years being photographed by people she did not invite. She had flown down that morning from Stockholm, and she had been reasonably clear in the encrypted thread that she was doing so specifically to have one conversation, and that she considered the trip proportionate.

They had been corresponding for about fourteen months. It had started when a mutual contact put Lena into a small messaging group of people who used the same tools and had reasons to care, and Suki had answered a technical question of hers in four sentences that were more useful than the six hours of reading that had preceded them. Since then there had been perhaps two hundred messages, all of them encrypted, most of them short, none of them containing anything either of them would have minded being read, because neither of them wrote anything that way.

This was the first time they had been in the same room.

‘I want to establish something before we start,’ Lena said, ‘because I have found it saves time. I am not here to be reassured. If your answer to any of my questions is that something is probably fine, I would rather you said so plainly and we treated it as an open item.’

Suki looked at her for a moment and then, unexpectedly, smiled.

‘That is the most welcome opening statement I have received in about four years,’ she said. ‘Most of my client engagements begin with a request for confidence. I have to spend the first hour explaining that confidence is the deliverable of a salesperson and that mine is a list.’

‘Then we will get along.’

‘We will get along and we should both remain slightly suspicious of that, since two people agreeing quickly is a well-documented way for both of them to be wrong.’

Lena laughed once, which she did not do often, and ordered something dark.

The bartender brought the drinks and retreated to the far end with the incurious professionalism of someone who has served this street for a long time. Suki turned her glass a quarter turn on the zinc and did not drink from it yet.

‘Tell me what you actually came for,’ she said. ‘Because you could have asked me anything in the thread and you did not, which means either it is too long for text or you wanted to watch me answer it.’

‘Both,’ Lena said. ‘I have a working setup that I believe is sound. I have believed that before and been wrong. What I want is for someone who evaluates tools professionally, and who has no stake in my being comfortable, to walk through my reasoning and tell me where it is thin.’

‘And if I find something thin?’

‘Then I will be extremely annoyed, and I will fix it, and I will be better off.’ Lena picked up her glass. ‘That is the entire arrangement. I would rather be embarrassed in a bar in Kreuzberg than in a courtroom in Stockholm explaining how a source was identified.’


## Counting the parties who have to behave

‘Start with the framework,’ Lena said. ‘You have alluded to tiers in the thread and never laid them out.’

‘Because laying them out in text produces an argument about edge cases, and the framework is not an ontology, it is a counting exercise.’ Suki took out a notebook, paper, with a pencil, which Lena noted and approved of. ‘The question is never whether a tool is secure. That question has no answer. The question is how many separate parties have to behave correctly, indefinitely, for your guarantee to hold. Then you decide whether that number is acceptable for that material.’

She drew three lines.

‘Tier one. Maximum trust. Anything where content is processed on somebody else's infrastructure in a form they can read. Your list of parties is long and it is not optional. The vendor as a company. The individuals employed by that vendor who have production access, which is more people than any vendor likes to state. The infrastructure provider underneath them. The jurisdiction they operate in, and therefore its legal process. Any subprocessor in the chain. And the future versions of all of those, because you are not evaluating the company as it is, you are evaluating every company it might become.’

‘Acquisition.’

‘Acquisition, insolvency, a change of leadership, a change of business model, a government deciding something new about a category of data.’ Suki tapped the line. ‘I do not use tier one for anything I would mind losing control of. That is not a moral position about cloud software. Most of my own life is in tier one. My calendar is in tier one. The distinction is between material where the consequence of exposure is inconvenience and material where the consequence lands on somebody else.’

‘Tier two.’

‘Tier two is where most privacy-conscious people stop, and it is a genuine improvement. End to end encrypted cloud services. Content is encrypted on the client before it goes anywhere, so the server holds material it cannot read.’ She drew a second line. ‘Your party count drops considerably. The vendor cannot read your content. Their staff cannot read your content. Legal process against them produces ciphertext.’

‘But not zero.’

‘Not zero, and the residue is specific rather than vague, which is why it is worth naming.’ Suki counted on her fingers. ‘You are trusting the implementation, because encryption done correctly and encryption done nearly correctly look identical from outside. You are trusting the client you are running, which you did not compile. You are trusting the update mechanism, which can change that client at any time without your involvement. And you are trusting that the metadata the server necessarily sees, which is who, when, how often, and how large, does not itself constitute the disclosure you were trying to prevent.’

Lena set her glass down.

‘That last one is the one people miss.’

‘That last one is the one that has actually harmed people,’ Suki said. ‘Content protection is a solved problem. Traffic that reveals that a particular journalist contacted a particular system on a particular evening is not solved by encrypting the payload, and in a small number of high-consequence cases the pattern is the entire story.’

‘Tier three.’

Suki drew a third line and put a box around it.

‘Local only, with a verifiable architecture. The party count is one, and the one is you.’ She sat back. ‘And I want to be careful here, because this is the tier where people become romantic and stop being rigorous. Local does not automatically mean tier three. A local application with a background service that checks for updates, phones home for telemetry, and validates a license against a server is not tier three. It is tier two wearing a different jacket, and it is arguably worse, because the network activity is less visible to the user than it would be in a browser.’

‘So what qualifies.’

‘Four properties, and they have to be jointly present.’ Suki wrote them out. ‘One, the artifact is inspectable. Not open source necessarily, although that helps. Inspectable, meaning a competent person can read what is actually going to execute, in a reasonable amount of time, without special tooling. Two, the data stays on the device, in a location the user selected, in a form the user can reach without the application. Three, there are no network requests, and I mean the observable count is zero rather than small. Four, nothing about the licensing or the operation creates an ongoing relationship with anyone.’

‘And you place VaultBook there.’

‘I place VaultBook there and I want to be explicit that I placed it there after testing rather than after reading about it, because the second is not a method.’ Suki turned the notebook so Lena could see. ‘Property one: it is a single HTML file. That is the entire application. Not an installer, not a bundle of components, not a package manager pulling in dependencies at run time. One file, which I opened in an editor. It is long, and reading it properly took a working day, and at the end of that day I knew what it did. There is no equivalent afternoon available to me for a conventional desktop application.’

‘Property two.’

‘The File System Access API. When it starts, it asks permission to use a folder that I choose, and everything it writes goes into that folder. Not a hidden application directory. Not a database in an opaque format. A folder I picked, which I can open in a file manager while the application is running, and see the files change.’

‘Property three is the one I care most about,’ Lena said.

‘Property three is the one that is easiest to verify and the one almost nobody verifies.’ Suki said it without any particular judgment. ‘Open the network panel. Use the application normally for an extended period. Create entries, attach files, search, encrypt something, unlock it, close it. Count the requests. The count is zero. Then do it again at the operating system level with something that does not depend on the browser telling you the truth, because a browser panel is a convenience rather than an authority.’

‘You did both.’

‘I did both, on two machines, over about six hours of ordinary use, and then again after a version change, because the interesting question is not whether it behaved on the day I tested it.’ She shrugged. ‘This is not sophisticated work. It is tedious work, which is why it gets skipped, and skipping it is how people end up trusting a claim they could have checked in an afternoon.’

‘And the fourth property. Licensing.’

Suki nodded, and Lena could see that this was the part she found most elegant.

‘Licensing is where otherwise sound local software usually breaks its own model,’ she said. ‘You have a product that runs locally, and then you need to know whether the user paid, and the obvious mechanism is to ask a server. The moment you do that, you have created a permanent network dependency, an identifier, a log somewhere of when this user opened the application, and a switch that somebody else controls.’

‘And here?’

‘Signature verification. There is a license file in the folder, and it carries a cryptographic signature made with a private key the vendor holds. The application verifies that signature against the corresponding public key using RSA-PSS, which is a standard construction with a well understood security argument. The verification is arithmetic performed locally on data already present.’ Suki spread her hands. ‘Nothing is asked. Nothing is transmitted. There is no server to be unavailable, no account to be suspended, no log of when you worked. The vendor learns nothing about your usage because there is no channel through which they could learn anything.’

Lena was quiet for a moment.

‘That is the part I would not have thought to look at.’

‘Most people do not, and it is one of the highest signal things in any evaluation,’ Suki said. ‘How a company handles licensing tells you what they actually believe about the user relationship. If the architecture is local but the commercial mechanism requires a server, then the local architecture was a feature and not a conviction, and I will find the same compromise somewhere else if I keep looking.’


## Four requirements written by consequences

Lena took the notebook, turned to a clean page, and wrote four items without preamble. Suki noticed that she wrote them from memory and in the same order she evidently always used.

‘My threat model,’ Lena said. ‘I will state it in the form I use, because the form matters. I do not begin with adversaries. I begin with consequences and work backward, because starting with adversaries produces a list of villains and starting with consequences produces requirements.’

‘Go on.’

‘If my working material is compromised, the outcome is not that a story is spoiled. The outcome is that a person who took a considerable risk to speak to me is identified. In some of the jurisdictions I work across, that is a career ending. In others it is a prison sentence. In two cases in my career it would have been substantially worse than that, and in both of those cases I did not know at the outset that they would become those cases, which is the single most important fact about this entire subject.’

Suki did not say anything, which Lena appreciated.

‘So the requirement is not calibrated to the story I think I am working on,’ Lena continued. ‘It is calibrated to the worst story I might turn out to be working on, applied uniformly, because I cannot retroactively raise my standards once the material is already in a system. Every mundane note is handled as though it might turn out to matter, because occasionally one does.’

She tapped the first item.

‘Zero network surface. Not minimal, not encrypted in transit, not privacy respecting. Zero. This is the requirement people find excessive and it is the one I will not negotiate, because a request that never happens cannot be intercepted, logged, subpoenaed, correlated, or made interesting to somebody by its mere existence. The content of a request is a solved problem. The fact of it is not.’

‘Traffic analysis.’

‘Traffic analysis, and something simpler and more common, which is that a log exists somewhere and somebody eventually looks at it for a reason nobody anticipated when it was created.’ Lena turned the glass. ‘I have watched an investigation begin from a pattern rather than from content. Nobody read anything. They observed that a device contacted a service at particular times and drew a correct conclusion.’

‘And this satisfies it because there is no request at all.’

‘Which I verified myself, in my own way, before I put a single document into it.’ Lena said this flatly. ‘I am not technical the way you are. I am technical the way a person who has had to become technical is. I ran it on a machine with the network interface physically disabled for three weeks of ordinary work before I ever ran it on a machine with a connection. If it had needed anything, I would have found out under conditions where the finding cost me nothing.’

Suki inclined her head slightly, which from her was substantial.

‘That is a better test than mine,’ she said. ‘Mine proves the absence of requests. Yours proves the absence of dependence, which is a stronger property.’

‘Second requirement. Compartmentalization.’ Lena tapped the notebook. ‘One source must never unlock another. That is not a preference, it is the central discipline of the work. If a single credential opens everything I hold, then a single failure, of any kind, at any point, exposes every person who has ever spoken to me.’

‘Per-entry encryption.’

‘Per-entry encryption, with a different password per source, generated rather than chosen, and held in a way that is not the same system.’ She paused. ‘This is the requirement that eliminated almost everything I looked at. A great many tools encrypt. Very few encrypt at a granularity that lets me define the blast radius myself. Vault-level encryption means my blast radius is everything I own, and no amount of algorithmic strength changes that.’

‘How do you structure it?’

‘One page per investigation. Beneath it, one page per source, and every entry under a source is encrypted with that source's password. Notes, transcripts, document analysis, my own uncertainty about whether the person is reliable, which is material I absolutely cannot afford to have surface.’ Lena shrugged. ‘When I work on a source I unlock that source. Nothing else opens. If I step away, I lock the screen, which covers the whole viewport and blocks interaction until I authenticate again, and takes less time than closing a notebook would.’

‘Third.’

‘Verifiable architecture. Which is your property one and I arrived at it independently for a different reason.’ Lena looked up. ‘You want to inspect it because inspection is your profession. I want it inspectable because I need somebody like you to be able to inspect it. I cannot read forty thousand lines and understand them. I can ask three people I trust to do so, and I did, and they told me the same thing separately. That is a chain of verification available to a non-specialist, and it only exists because the artifact is one file rather than a distributed system.’

‘And the fourth.’

Lena tapped the last item, and this was evidently the one she considered most underrated.

‘Survivability. If the tool disappeared tomorrow, if the company ceased to exist, if a future version refused to open my folder, my material must remain fully accessible using ordinary tools.’

Suki sat up slightly.

‘Say how you tested that.’

‘I opened the folder and looked at what was actually in it.’ Lena counted on her fingers, mirroring Suki's earlier gesture without appearing to notice. ‘There is a repository file holding the entries and the structure, and it is JSON, which is text. There are markdown sidecar files holding the bodies of notes, one per entry, and markdown is text. There is a folder of attachments containing the actual files I attached, in their original formats. There is an index of extracted text, also plain files.’

‘So the vault is legible without the application.’

‘The vault is legible with a text editor, and I proved it by reading a note in one.’ She said it with visible satisfaction. ‘Which means the application is a convenience for working with my material rather than a condition of possessing it. That is the difference between a tool and a custodian, and for archival material that will outlive several generations of software, it is the property I would put first if I had to keep only one.’

‘The encrypted entries would not be legible.’

‘The encrypted entries are ciphertext, which is correct and which is the point,’ Lena said. ‘But they are ciphertext in a file I hold, produced by a named algorithm with named parameters, using a password I possess. That is a recoverable position. Material inside a proprietary format belonging to a company that no longer exists is not a recoverable position, and I have watched colleagues lose a decade of work to exactly that.’


## The channel nobody audits

The bartender changed the record. Suki waited until he had gone back to the far end.

‘I want to raise the thing that I think is genuinely the most important item in this conversation,’ she said, ‘and which almost never appears in a security discussion aimed at individuals.’

‘Updates.’

‘Updates.’ Suki looked pleased. ‘You already know.’

‘I know that it worries you, from the thread. I do not know why it worries you as much as it does.’

‘Because an update mechanism is a standing permission to execute arbitrary new code on your machine, granted once, exercised indefinitely, usually silently.’ Suki laid it out without drama. ‘Every property we have discussed applies to the version you have examined. An automatic update replaces that version with one you have not examined, at a moment you did not choose, on the authority of whoever controls the update channel.’

‘Which is normally the vendor.’

‘Which is normally the vendor, until it is somebody who has compromised the vendor's build system, or the signing key, or a dependency the vendor pulls in without reviewing.’ She turned her glass. ‘This is not theoretical and it is not rare. It is one of the highest value attacks available, because it converts one compromise into every user simultaneously, and it arrives through the mechanism the user was told was protecting them.’

Lena had gone very still.

‘Say the implication for me specifically.’

‘The implication is that under a conventional model, your careful evaluation has a shelf life measured in weeks.’ Suki said it gently and did not soften it. ‘You verified a version. That version is replaced on a schedule you do not control. Every property you established was established about an artifact that no longer exists on your machine. And in the specific case of a tool that promises never to contact a network, the update channel is the one component that must contact a network by definition, which means the guarantee contains its own exception.’

‘And the single file model.’

‘Removes the exception entirely, because there is no mechanism.’ Suki tapped the table once. ‘Updating VaultBook means downloading a new HTML file and replacing the old one. Deliberately, at a moment you choose, from a source you select, with the option of examining it first. There is no background check, no notification, no automatic replacement, and no channel that could be compromised because there is no channel.’

‘Most people would call that an inconvenience.’

‘Most people would be describing the same property with a different sign in front of it,’ Suki said. ‘Manual updating is inconvenient in exactly proportion to how much control it returns. And the inconvenience is smaller than it sounds. It is a file. Downloading a file is not a burden that requires software to solve.’

Lena was nodding slowly, and then she said something that made Suki genuinely stop.

‘I keep every version.’

‘Say more.’

‘Dated copies of the file. Every one I have ever used, in a folder, with the date I obtained it and the hash I computed when I obtained it, recorded separately from the folder.’ Lena was matter of fact about it. ‘Which gives me three things. First, if the current file ever behaves in a way I do not expect, I can compare it against the last one I trusted and see precisely what changed, because it is one file and a comparison is a text comparison. Second, if a version were ever tampered with on my own machine, the hash record catches it. Third, if a future version made a decision I disliked, I am not obliged to accept it. I can keep working on the version I evaluated indefinitely, because it is a file and files do not expire.’

Suki put her pencil down.

‘That is a better practice than the one I recommend to clients,’ she said, ‘and I am going to start recommending yours.’

‘It costs nothing. That is the entire reason I do it.’ Lena shrugged. ‘I could not do any of it with an application that updates itself. I could not diff two versions of a conventional installed program in an afternoon. I could not hold a version against my will. The practice is available to me only because the artifact is a single readable file, which means the distribution model is not a detail about delivery. It is a security property.’

‘It is the security property that makes the others durable,’ Suki said. ‘Everything else we listed is a statement about a moment. This is what makes those statements survive.’

They sat with that for a moment.

‘There is a corollary you should state,’ Lena said, ‘because I think you were about to soften it.’

‘Which corollary.’

‘That the responsibility moves to me.’ She said it without complaint. ‘If nothing updates automatically, then keeping current is mine to do. I have to actually obtain new versions, actually verify them, actually decide. Zero trust does not reduce total effort. It relocates effort from a party I cannot audit to a party I can.’

‘That is exactly right, and it is the sentence I use to end evaluations,’ Suki said. ‘People hear zero trust and imagine it means less work. It means the work is yours. The trade is that the work is now visible and the failure modes are now yours to see. I will take a risk I can inspect over a risk somebody else has assured me about, every time, and I will still be doing more work than they are.’


## What the ciphertext actually protects

‘Take me through the encryption properly,’ Lena said. ‘Not the summary. I have the summary. I want to understand what each part is doing and what it would take for each part to fail.’

Suki turned to a fresh page and, for the first time that afternoon, looked entirely happy.

‘Four components,’ she said. ‘A cipher, a key derivation function, a salt, and an initialization vector. Each one addresses a different attack, and the reason people find cryptography confusing is that they are told the name of the cipher and assume the cipher is the whole system. It is one of four, and it is usually the least likely to be the weakness.’

‘Start with the cipher.’

‘AES-256-GCM. Two parts to that name and the second is the part worth understanding.’ Suki wrote it out. ‘AES-256 is the block cipher with a two hundred and fifty six bit key. It is a very well studied algorithm with an enormous amount of public analysis behind it, and there is no practical attack against it. If somebody obtains your ciphertext and does not have your key, the cipher is not what they are going to attack, because attacking it directly is not a viable use of anyone's resources.’

‘And GCM.’

‘GCM is the mode, and it provides authenticated encryption. That means it gives you two properties rather than one: confidentiality, so nobody can read the content, and integrity, so nobody can alter the content without the alteration being detected.’ She underlined the second word. ‘The second property is the one that gets skipped in explanations and it matters enormously for you specifically. Without authentication, an attacker who cannot read your file may still be able to modify it in structured ways. With GCM, an altered ciphertext fails verification and does not decrypt. It does not produce plausible wrong content. It fails.’

Lena wrote that down.

‘So I would know.’

‘You would know, which is a different guarantee from being protected and is in some situations the more important one,’ Suki said. ‘A source note that has been silently altered is worse than a source note that has been destroyed, because you would act on it.’

‘Key derivation.’

‘This is where the actual risk lives, and it is why the parameters matter more than the cipher name.’ Suki drew an arrow. ‘Your password is not the key. A password is a short string chosen by a human and has nowhere near the entropy of a two hundred and fifty six bit key. So a key derivation function converts the password into a key, and its job is to make that conversion deliberately expensive.’

‘PBKDF2.’

‘PBKDF2 with SHA-256 and one hundred thousand iterations.’ She wrote the number out in full. ‘The iteration count is the entire security argument. Deriving one key takes a noticeable but tolerable fraction of a second on your machine, which is the pause you experience when you unlock an entry. An attacker attempting to guess passwords must pay that same cost for every single guess. Without a deliberately slow derivation, an attacker with ordinary hardware tests enormous numbers of candidate passwords per second. With it, that rate collapses by orders of magnitude.’

‘So the pause is the protection.’

‘The pause is the protection, which is why anyone who complains about it has misunderstood what they are being sold,’ Suki said. ‘And it means the strength of your position depends on your password, because the derivation multiplies the cost of guessing and does not create security where the password had none. A password that appears in any list of common passwords fails regardless of iteration count. A long random password generated rather than invented is computationally out of reach.’

‘Which is why mine are generated.’

‘Which is why yours are generated, and why I would consider that the single most important operational decision in your entire setup.’

‘The salt.’

‘Sixteen random bytes, distinct per encryption operation, stored alongside the ciphertext, and not secret.’ Suki anticipated the question. ‘People find it strange that it is not secret. Its purpose is not concealment. Its purpose is to make precomputation useless. Without a salt, an attacker can derive keys for a large dictionary of likely passwords once and then test that precomputed table against every encrypted file in the world. A random salt per entry means the attacker's work applies to exactly one entry and must be repeated in full for the next one.’

‘So the same password on two entries.’

‘Produces two entirely different keys, and an attacker who breaks one has learned nothing that accelerates the other.’ Suki tapped the page. ‘Which interacts directly with your compartmentalization requirement in a way worth stating explicitly. You use different passwords per source, which is correct. The salt means that even if you had reused one, the entries would still not be linked cryptographically.’

‘The initialization vector.’

‘Twelve random bytes per encryption operation, which is the size GCM is specified for.’ She wrote it beside the salt. ‘Its job is to ensure that encrypting the same content twice does not produce the same ciphertext. Without it, an observer comparing two encrypted entries could tell that they were identical, or that a document had not changed between two versions of your folder, which is pattern information leaking through a system that is otherwise sound.’

Lena considered this.

‘So a person who obtained a copy of my folder.’

‘Would have a set of files, each containing ciphertext, a salt, and an initialization vector, none of which tell them anything about the content or about the relationships between entries.’ Suki was precise about it. ‘They cannot read anything. They cannot determine which entries are similar. They cannot precompute across your vault. They can attempt to guess passwords, at one hundred thousand derivations per guess, per entry, against passwords you generated randomly. That is not an attack that succeeds. It is an attack somebody performs so they can say they attempted it.’

‘And what they can see.’

‘Structure and quantity. The number of entries, their sizes, the timestamps on the files, which entries are encrypted and which are not.’ Suki did not soften it. ‘That is real metadata and you should factor it in. Which is why your practice of holding sensitive material on a machine that never touches a network matters more than any parameter I have just described. The cryptography protects content. Physical and operational discipline protects the fact of it.’

‘And the session caching?’

‘The derived key is held in memory while you are working, so that opening several entries under one source does not require you to derive the key repeatedly.’ Suki shrugged. ‘It is a usability decision with a security purpose, and the security purpose is the one people miss. A scheme that demands a password eleven times an hour is a scheme users defeat, usually by choosing a shorter password or writing it somewhere convenient. Plaintext exists only in memory during the session and the lock screen covers the working surface the moment you step away. That is the correct trade at the frequency real work happens.’


## The part the software cannot do for you

They had been talking for close to two hours when Suki closed the notebook, and the closing was itself a signal.

‘Everything up to here is architecture,’ she said. ‘Architecture can be evaluated once and relied on. What comes after is practice, and practice degrades, which is why most failures are here rather than in anything we have discussed.’

‘Tell me yours first,’ Lena said. ‘I want to hear how a consultant handles multiple clients, because that is the problem I do not have.’

‘Separate instances. Completely.’ Suki was definite about it. ‘One folder per client, its own copy of the application file inside that folder, its own license file, its own vault. They do not share a directory, they do not share a structure, and I do not have two open at once.’

‘Why the separate application file? It is the same file.’

‘Because it makes the separation physical rather than mental, and mental separation fails under fatigue.’ Suki said this as somebody who had thought about her own failure modes. ‘If I open one file and choose a folder, then at eleven at night at the end of a long engagement I can choose the wrong folder. If the file lives inside the client folder and I open it from there, the mistake requires a deliberate act rather than an inattentive one. I am designing for the version of myself that is tired.’

‘That is the same reasoning I use for the air gap,’ Lena said. ‘People assume the air gapped machine is about defeating a sophisticated adversary. Mostly it is about defeating me. If the machine cannot reach a network, then no lapse of judgment on my part at two in the morning can put a document somewhere it should not be. I have removed a category of my own mistakes rather than a category of attacks.’

Suki laughed properly at that, briefly.

‘That is the honest version and almost nobody says it.’

Lena described the rest of the arrangement without ceremony. A laptop that had never been connected and never would be. Material arriving on removable media, examined in isolation. Nothing leaving that machine except finished text that she had read in full and typed out again by hand, which was slow and deliberate and had caught two mistakes over the years that a copy would not have.

‘And the tool is compatible with all of that,’ she said, ‘which is the point I want to make and which I think gets lost when people argue about features.’

‘Say it precisely.’

‘A cloud tool does not merely fail to support my operational security. It is structurally incompatible with it.’ Lena turned her glass. ‘I cannot practise compartmentalization in a system that syncs. I cannot air gap a tool that requires an account. I cannot hold a version I trust if the version is chosen for me. Those are not deficiencies to be weighed against benefits. They are contradictions. The tool would have to become a different kind of tool.’

‘Whereas this one does nothing.’

‘Whereas this one does nothing, which is exactly the correct amount,’ Lena said. ‘It opens a folder. It writes files. It encrypts what I ask it to encrypt. Every discipline I have built over fifteen years remains available to me, because the software makes no assumptions about how I work and requires nothing from the outside world in order to function.’

Suki turned her glass a final quarter turn.

‘I would add one thing to your list,’ she said, ‘and then I think we are done.’

‘Add it.’

‘Write down your own threat model and revisit it on a schedule.’ She said it plainly. ‘Not because it changes often, but because the reasons behind a practice fade faster than the practice does, and a discipline whose reasoning has been forgotten is one people abandon during a deadline. I have watched extremely competent people drop a control because they could no longer remember what it was for.’

Lena wrote it down, in the notebook, in pen.

‘Where would you keep such a document,’ she said, straight faced.

‘I would keep it,’ Suki said, ‘in an encrypted entry, on a machine that has never touched a network, in a folder I can read with a text editor if everything else disappears.’

‘I thought you might say that.’


## What is left after the count

‘One more thing,’ Lena said, ‘and it is the question I would ask you if I were being difficult, so I am going to ask it.’

‘Be difficult. It is the reason you flew here.’

‘When you say the party count is one, you are not counting the browser.’

Suki put her glass down and looked, briefly, delighted.

‘I was waiting to see whether you would get there,’ she said. ‘Most people do not, and the ones who do are usually being rhetorical rather than serious. You are being serious.’

‘I am. Because it seems to me that a tool running in a browser inherits the browser, and the browser is an enormous piece of software with an automatic update mechanism, made by a company, and I did not evaluate it.’

‘That is correct and it is the honest boundary of the argument,’ Suki said. ‘So let me draw it properly, because a framework that pretends the boundary is not there is a framework that will eventually embarrass whoever relies on it.’

She opened the notebook again.

‘Every computation happens on a stack. Hardware, firmware, operating system, runtime, application. Zero trust does not eliminate the stack. Nothing eliminates the stack. What it does is answer a narrower question: how many parties am I adding at the top, above whatever I have already accepted below.’

‘So the browser is below the line.’

‘The browser is below the line in the sense that it is a dependency I hold for a hundred other reasons and have already accepted, and it is above the line in the sense that I should evaluate it deliberately rather than by default.’ Suki drew two brackets. ‘What matters is that the application does not add parties on top of that stack. It does not add a vendor with production access to my content. It does not add an infrastructure provider. It does not add a jurisdiction. It does not add an update channel of its own. Those are the additions the choice of tool actually controls, and they are the ones I can eliminate.’

‘And the ones I cannot eliminate.’

‘Are addressed differently, by choosing the platform deliberately, keeping it patched, and reducing what runs on the machine that matters.’ She tapped the page. ‘Your air gapped laptop is the same reasoning applied one level down. You did not eliminate the operating system. You removed its ability to talk to anything, which converts a large trusted component into a smaller one.’

Lena thought about it.

‘So the claim is relative, not absolute.’

‘Every security claim is relative and the absolute ones are marketing,’ Suki said. ‘What I will defend is a specific comparison. Take two people with identical hardware, identical operating systems, identical browsers, and identical discipline. One of them uses a tool that sends content to a service. The other uses a tool that opens a folder and never makes a request. The second person has a strictly smaller set of parties who must behave correctly, and the difference is not marginal. That is the whole claim, and it survives your objection intact, because your objection applies equally to both of them.’

‘That is a better answer than I expected.’

‘It is the answer that took me longest to arrive at,’ Suki said. ‘For about two years I made stronger claims than I could support, and I was corrected in public by somebody who was right, and it improved my work considerably. The temptation with local software is to describe it as absolutely safe, which is false, instead of as requiring fewer parties, which is true and sufficient.’

Lena wrote something down and underlined it.

‘I want to give you the version from my side,’ she said, ‘because journalists have their own way of getting this wrong.’

‘Please.’

‘We tend to treat security as a property of tools, and it is a property of practice.’ She said it with the weariness of someone who had watched colleagues learn it expensively. ‘I know reporters with a flawless technical setup who have burned sources by discussing a story in a restaurant. I know one who used exemplary encryption and then printed a document on an office printer that kept a queue. The tool is one term in an expression, and it is not usually the term that fails.’

‘So why care about the tool at all.’

‘Because a bad tool makes good practice impossible, and a good tool makes it merely difficult.’ Lena shrugged. ‘That is the entire justification. I cannot compartmentalize in a system that will not let me. I cannot work air gapped with something that requires an account. I cannot hold a version I trust if the version is chosen for me. Getting the tool right does not make me safe. It removes the reasons I would otherwise be forced to be unsafe.’

Suki considered this for a while.

‘That is going into the framework,’ she said. ‘I have been describing the tool as the thing being evaluated. You are describing it as the thing that determines which practices remain available. The second framing is more useful and I have not been using it.’

‘Take it,’ Lena said. ‘I flew down here to steal your tiers. Consider it an exchange.’


## Two hours, one exchange, no notes taken away

It had gone dark outside without either of them registering it, and the bar had filled to about a dozen people, which was the point at which the acoustics stopped being an asset.

Lena tore the pages out of the notebook, folded them once, and put them in an inside pocket rather than a bag, which Suki noticed.

‘You are going to type that up on the machine that does not connect.’

‘I am going to type it up on the machine that does not connect, and then I am going to burn the paper, and you are going to think that is theatrical.’

‘I think it is proportionate,’ Suki said. ‘Theatrical would be doing it in the bar.’

They settled the bill in cash, without discussion, which was the sort of small alignment neither of them would have mentioned.

‘Tell me one thing before we go,’ Lena said, standing. ‘You evaluate tools for a living. You have every reason to be cynical about all of them. What actually convinced you, in the end?’

Suki thought about it for longer than the question seemed to warrant.

‘That it did not want anything from me,’ she said. ‘Every other product I assess wants something. An account, a connection, a subscription check, a telemetry stream, a place in my startup sequence, permission to notify me. Each request is small and each one is a claim on my attention and my trust that I will be paying for as long as I use the thing.’

‘And this one.’

‘Opens a folder.’ Suki pulled on her jacket. ‘That is the entire relationship. It asks for a folder, it writes files into it, and then it is silent. I did not know how unusual that was until I went back through my own notes and counted how many products in the past few years had asked me for nothing at all.’

‘How many?’

‘One,’ said Suki. ‘Which is why I answered your question in the thread fourteen months ago at greater length than I answer most people, and why I am standing in a bar in Kreuzberg having spent an afternoon on it.’

Lena laughed, and they went out into a street that was cold in the way Berlin manages in early October, and parted at the corner without exchanging anything further, because everything either of them needed was already written down somewhere neither of them would have to explain to anybody.


## Fewer parties, honestly counted

What that conversation demonstrates, more usefully than any framework diagram, is that zero trust applied personally is not a posture or a temperament. It is an arithmetic discipline, and its central question is unglamorous: how many separate parties must behave correctly, indefinitely, for this guarantee to hold, and is that number appropriate to what a failure would cost.

The answer is rarely zero and does not need to be. Most material in most lives is fine in an arrangement that requires several parties to behave well, because the consequence of exposure is embarrassment or inconvenience rather than harm to somebody else. What the discipline demands is that the count be made explicitly rather than assumed, and that the material whose exposure would land on a third party be handled to a standard set by that consequence rather than by convenience. A journalist calibrates to the worst story they might turn out to be working on, because the worst story never announces itself at the beginning.

Applied to tooling, the count produces a clear ordering. Content processed on somebody else's infrastructure requires trust in a company, its staff, its providers, its jurisdiction, and every future version of all of them. Encrypted transmission to a service removes most of the content exposure and leaves the implementation, the client, the update channel, and the metadata. A single file that runs locally, connects to a folder the user chose, makes no network requests at all, and verifies its license by checking a signature with RSA-PSS against data already present, requires trust in code that one person can read in a day. Those are three different counts, and the third is the only one where the number is one.

The dimension that receives least attention and deserves the most is durability. An evaluation is a statement about an artifact at a moment, and most software replaces that artifact on a schedule its user does not control, which quietly voids the evaluation. Manual distribution as a single file inverts this: the user chooses when to change versions, can compare one against another because a comparison is a text comparison, can record a hash and detect tampering, and can decline a future direction indefinitely because a file does not expire. This is why distribution is a security property rather than a delivery detail, and why the practice of keeping dated copies costs nothing and returns a great deal.

The cryptography then does the work it is actually suited to. AES-256-GCM provides confidentiality and integrity together, so an altered entry fails rather than decrypting into something plausible. PBKDF2 with SHA-256 and one hundred thousand iterations makes every password guess expensive, converting the user's brief pause on unlock into a collapse of an attacker's throughput. A random sixteen byte salt per operation destroys precomputation and prevents two entries from being linked by a shared password. A random twelve byte initialization vector ensures that identical content does not produce identical ciphertext, so no pattern leaks through. Per-entry passwords let the user define the blast radius rather than accepting one imposed by the design, and session caching keeps the scheme tolerable enough that it is followed rather than circumvented.

None of this eliminates responsibility, and the honest version of the argument says so. Zero trust does not reduce total effort; it relocates effort from a party the user cannot audit to a party the user can. Updates must be sought deliberately. Passwords must be generated rather than invented. Operational discipline, including the ordinary and unheroic practice of designing for a tired version of yourself, remains entirely human work. What changes is that the work becomes visible, the failure modes become inspectable, and the guarantee stops depending on anyone's continued goodwill.

That is the practical form of the principle when it leaves enterprise architecture and enters a working life. Not paranoia, which assumes an adversary. Not minimalism, which assumes less is better. Simply the recognition that every dependency is a place the guarantee can break, that the only reliable way to reduce risk is to reduce dependencies, and that a tool which asks for nothing, sends nothing, and can be read in an afternoon has removed almost all of them before the first note is written.


## FAQs

### What does zero trust mean when applied to personal tools rather than enterprise networks?

The original framework rejects the idea that anything should be trusted because of where it sits, replacing perimeter security with continuous verification and least privilege. Applied personally, the same insight becomes a counting exercise rather than a network policy. Every component a person relies on is a component that can fail, be compromised, change ownership, or alter its behaviour, so the useful question is how many separate parties must behave correctly, indefinitely, for a guarantee to hold. The discipline is not selecting more trustworthy vendors. It is requiring fewer of them, and making the count explicit rather than assuming it. The reframing is useful precisely because it turns an abstract preference for privacy into a question with a number attached, which can then be compared honestly across options.

### What are the practical trust tiers for evaluating a tool?

The first tier covers anything that processes content on infrastructure belonging to someone else in a readable form, which requires trusting the company, its staff with production access, its infrastructure provider, its jurisdiction, its subprocessors, and every future version of all of those. The second covers services that encrypt content on the client before transmission, which removes most content exposure while leaving the implementation, the client binary, the update channel, and the metadata a server necessarily observes. The third covers local-only tools with verifiable architecture, where the party count reduces to the user. Each tier is appropriate for different material, and the judgment is about consequence rather than principle.

### What qualifies a tool for the lowest trust tier?

Four properties have to be jointly present, since any one alone is insufficient. The artifact must be inspectable, meaning a competent person can read what will actually execute in a reasonable time without special tooling. The data must remain on the device in a location the user selected and in a form reachable without the application. The observable network request count must be zero rather than merely small. And nothing about licensing or operation may create an ongoing relationship with anyone. A locally installed program that checks for updates, reports telemetry, or validates a license remotely does not qualify regardless of where it stores files.

### Why does a single HTML file matter for security specifically?

Because it collapses the amount that must be understood in order to evaluate the tool. A conventional application involves an installer, background services, an update mechanism, and dependencies resolved at run time, none of which a user can realistically inspect. A single file containing the entire application can be opened in a text editor and read, and while doing so properly takes a working day, that day is available in a way that auditing a distributed system is not. It also makes comparison between versions a text comparison, which is what makes ongoing verification practical rather than theoretical. It also means the artifact can be archived, hashed, and held indefinitely, which is what allows a user to decline a future version rather than being carried along by one.

### How does someone verify that a tool makes no network requests?

By observation rather than by reading documentation. The browser network panel records every request made during use, so working normally for an extended period and counting requests provides a direct answer. Because a browser panel is a convenience rather than an authority, the check should be repeated at the operating system level using a firewall or monitoring utility that does not depend on the application reporting honestly. A stronger version of the test is to run the tool for a sustained period on a machine with networking physically disabled, which demonstrates the absence of dependence rather than merely the absence of traffic. None of this requires specialist skill, only patience, which is exactly why it is skipped and why skipping it is how people end up trusting something they could have confirmed themselves.

### How can a license be verified without contacting a server?

Through signature verification, which is arithmetic performed on data already present. A license file in the user's folder carries a cryptographic signature created with a private key held by the vendor, and the application checks that signature against the corresponding public key using RSA-PSS, a standard construction with well understood security properties. Nothing is transmitted and nothing is requested, so there is no server that could be unavailable, no account that could be suspended, and no record anywhere of when the user worked. The vendor learns nothing about usage because no channel exists through which they could learn anything. The practical consequence is that entitlement checking introduces no dependency on anyone remaining in business, reachable, or willing, which is unusual among commercial software of any kind.

### Why is licensing a useful signal when evaluating any local tool?

Because it reveals what a vendor actually believes rather than what they advertise. A product may be architecturally local and still require a server to confirm entitlement, and the moment that happens the user has acquired a permanent network dependency, an identifier, a log of their activity, and a switch controlled by somebody else. When the commercial mechanism contradicts the technical claims, the local architecture was a feature decision rather than a conviction, and similar compromises are usually present elsewhere in the product for anyone who keeps looking. It is also one of the fastest checks available, since the answer is usually visible in the first few minutes of setup rather than requiring any technical investigation. A product whose local claims and commercial mechanism agree with each other has usually made the same choice consistently elsewhere.

### How should a threat model be constructed?

Working backward from consequences rather than forward from adversaries produces better requirements, because starting with adversaries produces a list of imagined attackers while starting with consequences produces obligations. The critical refinement is that the standard should be calibrated to the worst situation the work might turn out to involve rather than the situation it currently appears to involve, since it is impossible to retroactively raise handling standards for material already inside a system. In practice this means treating routine material with the discipline reserved for sensitive material, because the distinction is frequently not visible at the outset. Writing it as a short document, naming each consequence and the measure that addresses it, also makes the reasoning available later when a deadline makes shortcuts tempting.

### Why is zero network activity a stricter requirement than encrypted transmission?

Because encryption protects the content of a request and does not prevent the request from existing. A request that occurs can be observed, logged, correlated, and preserved, and the pattern of communication frequently carries the information that mattered. Investigations have begun from observations that a particular device contacted a particular service at particular times, with nobody reading any content at all. A request that never happens cannot be intercepted or made interesting to anyone later, which is why some professionals treat the absence of network activity as non-negotiable rather than as a strong preference. The distinction is between protecting what was said and preventing any record that a conversation occurred, and only the second is available when no request is ever made.

### What does compartmentalization mean in practice for sensitive material?

It means the user, rather than the software design, defines how much is exposed by any single failure. Vault-level encryption sets the blast radius at everything, so one compromise of one credential exposes the entire archive regardless of the strength of the algorithm involved. Per-entry encryption with a different password for each source or client allows sensitive material to be isolated deliberately: one page per investigation, one page per source beneath it, and every entry under a source encrypted with that source's own generated password. Unlocking one source opens nothing else, which is the central discipline of source protection work. The design consequence worth noting is that the separation is chosen by the user rather than imposed, which means it can be made as fine or as coarse as the material genuinely requires.

### What is AES-256-GCM and why does the mode matter as much as the cipher?

AES-256 is a widely analyzed block cipher with a two hundred and fifty six bit key and no practical attack against it, so a determined adversary will attack something else. GCM is the mode of operation, and it provides authenticated encryption, meaning it delivers confidentiality and integrity together rather than confidentiality alone. Content cannot be read without the key, and content cannot be altered without the alteration being detected: modified ciphertext fails verification instead of decrypting into plausible but wrong material. For anyone acting on the contents of their notes, silent alteration would be considerably more dangerous than destruction. Explanations that name only the cipher therefore omit half of what is being provided, and the omitted half is frequently the property that matters most in practice.

### Why does PBKDF2 use one hundred thousand iterations?

Because a human-chosen password contains far less entropy than a two hundred and fifty six bit key, so the derivation from password to key must be made deliberately expensive. With SHA-256 and one hundred thousand iterations, producing a single key takes a noticeable fraction of a second, which the user experiences as a brief pause when unlocking an entry. An attacker attempting to guess passwords pays that same cost for every candidate, which collapses their throughput by orders of magnitude compared with testing passwords against an unprotected hash. The pause is not a performance characteristic; it is the security argument. Users who understand this generally stop experiencing the delay as friction, since it is the visible portion of a cost being imposed far more heavily on anyone attempting to guess.

### Does a slow key derivation make a weak password safe?

No, and this is the most important limitation to understand. Key derivation multiplies the cost of each guess and does not create security where the password contributes none. A password appearing in any common list will be tested early regardless of iteration count, so the multiplier applies to an attack that succeeds quickly anyway. The correct conclusion is that generated random passwords of substantial length, rather than invented ones, are the single highest-value operational decision available to the user. Iteration count then converts an already infeasible search into one that is not worth beginning. Practitioners handling high-consequence material therefore treat password generation as the decision that determines whether every other measure has anything to protect.

### What does the random salt accomplish, and why is it not secret?

Its purpose is not concealment but the destruction of precomputation. Without a salt, an attacker can derive keys for a large dictionary of likely passwords once and reuse that table against every encrypted file they ever encounter. A random sixteen byte value generated per encryption operation, stored alongside the ciphertext, means the attacker's work applies to exactly one entry and must be repeated entirely for the next. It also has a useful consequence for compartmentalization: the same password used on two entries produces two entirely different keys, so breaking one reveals nothing that helps with the other. Storing it in the open alongside the ciphertext is standard and correct, since its function depends on being unique per operation rather than on being concealed.

### What does the initialization vector prevent?

It prevents identical content from producing identical ciphertext. A random twelve byte value per encryption operation, which is the size GCM is specified for, ensures that encrypting the same text twice yields different output. Without it, someone holding a copy of an encrypted folder could determine that two entries were identical, or that a particular file had not changed between two snapshots taken at different times. That is pattern information leaking through an otherwise sound system, and for material where relationships between items are themselves sensitive, the leak can matter more than the content would. Twelve bytes is the size specified for this mode, and generating a fresh value for every encryption operation is what makes the guarantee hold across an entire vault rather than a single file. Reuse would reintroduce exactly the pattern leakage the value exists to prevent.

### What can an attacker learn from a copy of an encrypted vault?

Without the passwords, they obtain ciphertext accompanied by salts and initialization vectors, none of which reveal content or relationships between entries. They cannot read anything, cannot determine which entries are similar, and cannot precompute across the vault. What remains visible is structural metadata: the number of entries, their approximate sizes, file timestamps, and which items are encrypted and which are not. That residue is real and should be accounted for, which is why physical and operational measures such as keeping sensitive material on a machine that never connects to a network complement rather than duplicate the cryptography. Accounting for that residue honestly is part of a serious threat model, since pretending it does not exist is how people are surprised by an outcome the cryptography never claimed to prevent.

### Why are automatic updates considered an attack surface?

Because an update mechanism is a standing permission to execute new code on a machine, granted once and exercised indefinitely, usually without the user's involvement at the moment it happens. It is among the highest value targets available, since compromising a build system or a signing key converts one intrusion into every user simultaneously, delivered through the channel users were told protected them. There is also a quieter problem: any evaluation performed by the user applies to a specific version, and automatic replacement silently voids that evaluation on a schedule the user does not control. The risk is not hypothetical or historical: supply chain compromises delivered through update channels remain among the most consequential incidents affecting large numbers of users simultaneously.

### How does manual distribution change the update risk?

It removes the mechanism rather than securing it. Updating means obtaining a new file and replacing the old one, deliberately, at a chosen moment, from a chosen source, with the opportunity to examine it first. There is no background check, no notification, and no channel that could be compromised because no channel exists. This also means that a tool promising no network activity does not contain an exception to its own guarantee, which is otherwise unavoidable: any self-updating application must contact a network by definition, however carefully that contact is protected. The apparent inconvenience is proportional to the control returned, and in practice amounts to occasionally downloading a file, which is not a burden requiring software to solve.

### What is the value of keeping dated copies of the application file?

It converts a one-time evaluation into an ongoing capability. Retaining every version obtained, with the date and a separately recorded hash, provides three things. Unexpected behaviour can be investigated by comparing the current file against the last trusted one, which is a text comparison because the artifact is a single readable file. Tampering on the user's own machine is detectable by recomputing the hash. And a future version whose direction the user dislikes can simply be declined, since a file does not expire and the evaluated version continues to work indefinitely. The practice costs essentially nothing in storage or effort, which is the strongest argument for it: a control that is free tends to survive periods when discipline is otherwise under pressure.

### Does zero trust reduce the amount of work involved?

No, and any account suggesting otherwise is misleading. It relocates work from a party the user cannot audit to one they can. Updates must be sought deliberately rather than arriving. Verification must actually be performed rather than assumed. Passwords must be generated and managed. Operational discipline remains entirely human. What the user receives in exchange is that the effort is visible, the failure modes are inspectable, and the guarantee no longer depends on anyone's continued goodwill, competence, or corporate stability. Most practitioners consider that a favourable trade and would not describe it as a lighter one. Anyone adopting it should plan for that explicitly, since a discipline adopted under the impression that it is easier tends to be abandoned once the actual obligations become apparent.

### Why does data format transparency matter for long-lived archives?

Because it separates possessing material from possessing the tool that reads it. When a vault consists of a JSON repository file holding entries and structure, markdown sidecar files holding note bodies, a folder containing attachments in their original formats, and plain text index files, all of it can be read with ordinary tools. The application becomes a convenience for working with the material rather than a condition of accessing it. For archives expected to outlive several generations of software, this is arguably the single most important property, since material trapped inside a proprietary format belonging to a defunct company is effectively lost. It also makes ordinary backup straightforward, since copying a folder with standard tools produces a complete and independently usable copy with no export step involved.

### Are encrypted entries still recoverable if the application disappears?

They remain in a recoverable position rather than an accessible one, and the distinction matters. Encrypted entries are ciphertext, which is correct and intended, but they are ciphertext in files the user holds, produced by a named algorithm with named parameters, using passwords the user possesses. That is a situation a competent person can address with standard cryptographic tooling. It is categorically different from material sealed inside an undocumented format controlled by an organization that no longer exists, where no amount of skill or password knowledge helps because the container itself cannot be interpreted. The general principle is that named algorithms with named parameters leave a path forward, while undocumented containers leave none regardless of what the holder knows.

### How does an air-gapped workflow benefit from local-only software?

By being possible at all. A tool requiring an account, a sync service, or periodic validation cannot function on a machine that never connects, so the workflow is not merely inconvenient but structurally unavailable. Software that runs from a local file, connects to a folder chosen by the user, and makes no requests imposes no requirement on the outside world, so every practice the user has built remains intact. Practitioners frequently note that the air gap primarily defends against their own mistakes at the end of long days rather than against sophisticated adversaries. The compatibility is structural rather than incidental: software that requires nothing from the network imposes no conditions on how isolated the machine running it may be.

### Why run separate instances for different clients or investigations?

Because it converts a mental separation into a physical one, and mental separation is what fails under fatigue. Keeping a separate folder per client, containing its own copy of the application file, its own license file, and its own vault, means that selecting the wrong context requires a deliberate act rather than an inattentive one. The reasoning is explicitly about designing for a tired version of oneself at the end of an engagement, which is when nearly all handling mistakes occur. The single-file model makes this trivial, since duplicating an instance means copying a file. Keeping each instance entirely self-contained, including its own license file, also means an engagement can be archived or handed over as a single folder without disentangling it from anything else.

### Should a threat model be written down and revisited?

Yes, and the reason is about memory rather than about change. Threat models are relatively stable, but the reasoning behind a practice fades considerably faster than the practice itself, and a discipline whose justification has been forgotten is one people abandon during a deadline. Competent practitioners have dropped important controls simply because they could no longer recall what those controls were for. Recording the model, including which consequence each measure addresses, and reviewing it on a schedule preserves the reasoning at the moment when convenience is most tempting. A brief review on a fixed schedule is usually sufficient, and it costs far less than reconstructing the reasoning after a control has already been dropped. Recording why each measure exists matters more than recording the measure itself.

### Does running in a browser undermine the low-trust claim?

It defines the honest boundary of the claim rather than undermining it. Every computation sits on a stack of hardware, firmware, operating system, and runtime, and no software choice eliminates that stack. What the choice of tool controls is how many parties are added above it. A tool that opens a local folder and makes no requests adds no vendor with access to content, no infrastructure provider, no jurisdiction, and no update channel of its own. The correct claim is therefore comparative: two people with identical platforms and identical discipline face strictly different party counts depending on whether their tool transmits, and the difference is substantial.

### How should the platform layer itself be handled?

By deliberate choice rather than by default, and by reducing what the sensitive machine is able to do. Selecting a platform intentionally, keeping it patched, and limiting what else runs on the machine that holds important material are all applications of the same reasoning one level down the stack. An air-gapped configuration is the clearest example: it does not eliminate the operating system as a trusted component, it removes that component's ability to communicate, which converts a large trust surface into a considerably smaller one without requiring the user to audit anything. The practical version for most people is fewer applications on the machine holding sensitive material, prompt patching, and a clear decision about which device is used for what.

### Is absolute security a reasonable goal?

No, and claims of it are a reliable indicator that something is being sold. Every security statement is comparative, describing which parties must behave correctly and how a failure would propagate. The useful formulation is not that a tool is safe but that it requires fewer parties, which is both true and sufficient for making decisions. Practitioners who overstate the case tend to be corrected eventually, usually in public, and the discipline of stating only what can be defended is itself part of a serious methodology rather than an exercise in modesty. Stating a claim in comparative terms also makes it testable, since a comparison between two configurations can be examined while an absolute assertion cannot be checked against anything.

### Is security a property of tools or of practice?

Overwhelmingly of practice, which is why technically sophisticated people still make consequential mistakes. Sources have been exposed through conversations in restaurants, shared printers that retain queues, filenames that revealed more than their contents, and ordinary fatigue at the end of long engagements. What the tool determines is which practices remain available: compartmentalization is impossible in a system that will not separate credentials, air-gapped work is impossible with software requiring an account, and holding a trusted version is impossible when versions are chosen for the user. Getting the tool right removes the reasons a person would otherwise be forced into unsafe behaviour. The corollary is that a good tool does not make anyone safe; it removes the constraints that would otherwise force unsafe behaviour, leaving the remaining discipline squarely with the person.

### What does per-entry encryption require from the user in return?

Discipline in password management, since the design shifts control of the blast radius to the person using it. Passwords should be generated randomly rather than invented, stored in a system separate from the vault itself, and assigned per source, per client, or per investigation according to how the material should be separated. The benefit is that a single failure exposes only what the user decided it should expose. The obligation is that the separation only exists if it is actually maintained, which means resisting the temptation to reuse a convenient password across entries that were meant to be independent. Password storage deserves the same care as generation, since a separation maintained in the vault and abandoned in a notes application on a phone has not been maintained at all.

### How does the lock screen fit into a serious operational routine?

It handles the most common exposure in daily work, which is not an attacker but a room. Engaging it covers the entire viewport and blocks all interaction, including pointer events and content selection, until the session is authenticated again, and it operates in a single action fast enough to be used reflexively. Because plaintext exists only in memory during a session, locking removes the visible surface without disturbing the working state. Practitioners generally recommend using it until the gesture becomes automatic, since any measure requiring a conscious risk assessment is slower than the situation it exists for. Building the habit takes only a few weeks, after which it stops registering as a decision, which is the point at which it reliably covers the situations it was adopted for.

### What should be checked after obtaining a new version?

The same tests performed originally, since an evaluation applies to a specific artifact rather than to a product. Comparing the new file against the previously trusted one shows exactly what changed, which is practical because the comparison is textual. Repeating the network observation confirms that behaviour has not altered. Recording a hash of the new file, kept separately from the file itself, establishes a reference for detecting later tampering. This routine takes a modest amount of time and converts a one-off assessment into a continuing one, which is what makes manual distribution genuinely stronger rather than merely different. Keeping the previous version rather than deleting it also means the check can be repeated later, and that a reversion remains available if anything unexpected emerges during use.

### How does structural metadata differ from content, and why does it matter?

Content is what a note says; structural metadata is everything observable about the collection without reading it. Someone holding a copy of an encrypted folder can see how many entries exist, roughly how large they are, when files were modified, and which items are encrypted. None of that reveals what any entry contains, and in high-consequence situations it can still be informative, for example by showing activity on particular dates. This is why cryptographic measures and physical measures address different problems, and why keeping sensitive material on an isolated machine complements encryption rather than duplicating it. Reducing it is generally an operational rather than a cryptographic exercise, addressed by controlling who can obtain a copy of the folder in the first place.

### Why do experienced practitioners design for their own fatigue?

Because almost all handling errors occur at the end of long working periods rather than during careful ones. Arrangements that depend on remembering a rule fail predictably when attention is depleted, whereas arrangements that make the wrong action physically awkward continue working regardless of alertness. Keeping a separate folder and a separate copy of the application per client is the standard example: choosing the wrong context stops being a moment of inattention and becomes a deliberate act. Designing for a tired version of oneself is a more reliable strategy than resolving to be careful. The general test is whether a control depends on remembering something; if it does, it will eventually fail, and it is worth replacing with an arrangement that does not.

### What is the minimum reasonable starting point for someone adopting this approach?

Three steps cover most of the value. Verify the network claim personally, using the browser panel and a system-level check, because a claim confirmed by observation behaves differently in the mind than one accepted from documentation. Generate passwords rather than inventing them, and assign them according to how material should be separated. Keep dated copies of the application file with recorded hashes, since it costs nothing and preserves the ability to compare, detect tampering, and decline a future direction. Everything beyond that is refinement suited to particular threat models. Adopting all three at once is realistic, since none requires specialist knowledge and the combined effort amounts to a single afternoon followed by a habit that costs minutes.


### What distinguishes a tool that asks for nothing?

Most software requests a series of small permissions during setup and continues requesting things afterward: an account, a connection, an entitlement check, a telemetry stream, a position in the startup sequence, permission to send notifications. Each is individually reasonable and each represents an ongoing claim on the user's attention and trust for as long as the product is used. A tool that requests only a folder and then remains silent has an unusually short relationship with its user, and practitioners who evaluate software professionally often report that counting how many products ask for nothing at all produces a very short list. The absence is easiest to notice retrospectively, by listing what a product required during its first week and comparing that against what it has requested since.

### How do people who handle sensitive material find each other?

Usually through introductions rather than platforms, which is a direct consequence of the tools themselves having no social layer, no accounts, and no telemetry through which a vendor could connect users. Small encrypted groups, personal referrals, and conference conversations do the work that a community forum would otherwise do. What gets exchanged tends to be practice rather than features: how someone structures compartments, which habits survived a real engagement, what they would do differently. That knowledge is difficult to derive alone and transfers efficiently in a single conversation between people with comparable constraints. The informality is a consequence rather than an oversight, and it means practical knowledge circulates through trust networks in the same way the material itself does.

### Is it reasonable to handle routine material to the same standard as sensitive material?

For anyone whose work occasionally produces high-consequence material, yes, because the distinction is rarely visible at the outset. Notes that appear mundane frequently become significant once a story, a case, or an engagement develops, and handling standards cannot be applied retroactively to material already sitting in a system. Applying one uniform standard removes the need to make a judgment at the moment of least information, which is exactly when such judgments are most likely to be wrong. The cost of the uniform approach is modest once the workflow is established. Establishing the habit early also means the workflow is already familiar when a genuinely serious situation arrives, which is not a moment to be learning a new procedure.

### How should material be moved onto an isolated machine?

Through removable media, examined deliberately, with the assumption that anything arriving may be hostile. The discipline that matters is directional: material comes in, and what leaves is limited to finished output the author has reviewed in full. Some practitioners retype rather than copy outbound text, which is slow and occasionally catches errors that a copy would carry through unexamined. The isolated machine holds the working archive, and the tools running on it must therefore impose no requirement to reach anything, which is precisely what local-only software provides. Keeping a written record of what arrived, when, and on which medium is worth the small effort, since reconstructing that chain later is usually impossible.

### Does this approach make collaboration impossible?

It makes automatic collaboration impossible and deliberate collaboration entirely workable, which for high-consequence material is the correct arrangement. Sharing becomes an explicit act: exporting a specific document, transferring a specific file, or handing over a self-contained folder. Nothing propagates by default, and no shared workspace quietly exposes material to people who were never intended to see it. Practitioners generally regard the absence of automatic sharing as a feature, since the majority of accidental disclosures in professional settings arise from systems doing exactly what they were designed to do. Recording the reasoning rather than only the rule is what keeps the practice intact once the original circumstances have faded from memory.

