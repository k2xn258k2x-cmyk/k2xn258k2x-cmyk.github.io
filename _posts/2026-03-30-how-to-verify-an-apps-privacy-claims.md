---
title: "How to Verify an App's Privacy Claims (A Non-Technical Guide)"
description: "Every app claims to protect your privacy. Almost none of them explain how to verify that claim independently. This guide walks you through the practical tests - no coding required - that separate genuine privacy from marketing language."
date: 2026-03-30 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

At some point in the last few years, privacy became a marketing category. Applications that had collected and monetized user data for years began describing themselves as privacy-focused. Note-taking apps, productivity tools, messaging platforms, and browsers started competing on privacy claims the same way consumer goods compete on flavor or price. The word "private" began appearing in app store descriptions, landing page headlines, and onboarding flows with an frequency that bore little relationship to any technical measurement of privacy.

The problem with privacy as a marketing category is that it is almost entirely unverifiable by the people it is marketed to - or so most users assume. The reality is more useful than that assumption. There are concrete, practical tests that any person can perform to check the basic truthfulness of an application's privacy claims, most of which require nothing more than a modern browser and five minutes of attention.

This guide walks through those tests. It does not require a background in computer science, network engineering, or cryptography. It requires curiosity, a willingness to look at one unfamiliar browser panel, and the recognition that the word "private" printed on a website is not the same as evidence that your data is actually private.

By the end, you will have a practical toolkit for evaluating the privacy claims of any application you use or are considering - a toolkit that uses the same tools that privacy researchers, security auditors, and investigative journalists use, applied in ways that require no specialized training.

<!--more-->

## Why You Cannot Just Read the Privacy Policy

The most common advice given to people who want to understand an application's privacy practices is to read the privacy policy. This advice is well-intentioned but incomplete in ways that matter.

Privacy policies are legal documents written by lawyers whose primary job is to protect the company from legal liability while providing users with the disclosures that applicable regulations require. They are not consumer guides to data practices. They are not written to help you understand, in plain terms, what actually happens to your data.

The specific ways privacy policies fail as verification tools are worth understanding, because they explain why independent testing is necessary rather than sufficient on its own.

Privacy policies describe what the company commits to doing. They do not describe what the application actually does at a technical level. A company can truthfully write a privacy policy that says "we do not sell your data to third parties" while their application sends behavioral telemetry to fifteen third-party analytics services - because technically, sending data to an analytics service is not "selling" it. The technical reality and the policy language can diverge enormously while both remaining technically truthful.

Privacy policies can change unilaterally. The terms you read today may not be the terms in effect in six months. Most services reserve the right to change their privacy policy with a notification - typically an email or a banner - after which continued use constitutes acceptance of the new terms. Reading a privacy policy once at the time of signup does not tell you what the current terms are.

Privacy policies do not cover all data flows. Third-party SDKs embedded in applications have their own data practices, governed by the SDK provider's terms rather than the application's privacy policy. An application can have an excellent privacy policy while containing analytics SDKs, advertising identifiers, crash reporting libraries, and social media plugins that transmit data under entirely different terms.

Privacy policies are retroactively protective. If a company violates its own privacy policy, the recourse available to individuals is limited and slow - regulatory complaints, class action lawsuits, and enforcement actions that take years to resolve and may result in fines that represent a small fraction of the value extracted from the violation. The policy does not prevent the violation; it creates consequences after the fact.

None of this means privacy policies are worthless. Reading them is part of a complete evaluation. But reading them alone, without independent verification, provides far less assurance than most users believe.

## The Single Most Important Test: The Network Tab

The most powerful privacy verification test available to non-technical users is the browser network tab inspection. It sounds technical. It is not. Here is exactly how to perform it.

Open the application you want to test in a browser - Chrome, Firefox, Edge, or Safari all work. The application can be web-based or, if it is a desktop application, you can still use browser developer tools if the application runs in a browser engine.

Open the browser developer tools. In Chrome, Edge, or Firefox on Windows or Linux, press the F12 key, or press Ctrl+Shift+I. On a Mac, press Cmd+Option+I in Chrome or Firefox, or Cmd+Option+I in Safari after enabling the Develop menu in Safari Preferences. A panel will appear - it may open at the bottom of the screen or on the right side.

In the developer tools panel, find the tab labeled "Network." Click on it. You will see a panel that may be empty or may show a list of items. Each item in this list represents a network request - a communication from your browser to a server somewhere.

Now clear the existing entries. In Chrome and Edge there is a circle with a line through it (a "clear" icon) near the top left of the Network panel. In Firefox there is a trash can icon. In Safari there is a clear button. Click it to remove any existing requests from the list.

Now use the application for several minutes as you normally would. Open a note or document. Type something. Navigate between sections. Run a search. Open a setting. Watch the Network panel as you work.

If the application makes network requests, you will see them appear in real time. Each line represents a connection from your browser to a server. You can click on any line to see the details - specifically the "Request URL" or "Name" field will show you the domain the request is going to.

What you are looking for is the destination domains of the requests. The application's own domain - if it is a web application hosted at example.com, requests to example.com are expected. What is revealing is requests to other domains. Look specifically for domains associated with analytics services (google-analytics.com, segment.io, mixpanel.com, amplitude.com, heap.io), advertising platforms (doubleclick.net, ads.google.com, facebook.net), tracking services (hotjar.com, fullstory.com, mouseflow.com), and social media platforms (facebook.com, twitter.com, linkedin.com appearing in request URLs rather than in page content you loaded).

If an application claims strong privacy and your network panel shows a dozen requests to analytics and advertising domains before you have typed your first word, you have verified - independently, without trusting anyone's claims - that data is leaving your device and going to parties the application's marketing likely did not mention prominently.

If the network panel remains empty throughout your session with the application - no requests to any domain, not even the application's own domain - you have verified that no data is leaving your device through the network layer.

This test has a property that makes it uniquely trustworthy: it cannot be faked at the application level. Network requests are observable at the browser level, which is below the application's own code. An application cannot make a network request without it appearing in the developer tools network panel. The absence of requests is a genuine absence, not a claimed absence.

## Reading the Network Tab: What Different Requests Mean

Once you have the Network tab open and populated with requests, understanding what you are looking at turns raw data into actionable information. You do not need to understand every request. Focus on the destination domains and what categories they represent.

**First-party requests** go to domains owned by the application developer. If you are using an application from exampleapp.com, requests to exampleapp.com, api.exampleapp.com, or cdn.exampleapp.com are first-party requests. These are expected - the application needs to communicate with its own infrastructure to function if it is a cloud-based application.

**Analytics requests** go to behavioral analytics platforms. Common ones include google-analytics.com or analytics.google.com (Google Analytics), cdn.segment.com or api.segment.io (Segment), api.mixpanel.com (Mixpanel), api.amplitude.com (Amplitude), and js.heap.io (Heap). These services receive behavioral telemetry - what features you used, how long you used them, what you clicked, what you searched for. They are third parties you did not consent to share data with when you agreed to the application's terms.

**Advertising and tracking requests** go to advertising networks and cross-site tracking services. Common domains include doubleclick.net (Google advertising), facebook.net or connect.facebook.net (Facebook tracking pixel), ads.google.com, and numerous less recognizable advertising network domains. These requests serve tracking purposes - linking your behavior in this application to advertising profiles maintained across many applications and websites.

**Session recording requests** go to services that record user sessions - mouse movements, scroll behavior, clicks, and sometimes keystrokes. Common services include static.hotjar.com (Hotjar), rs.fullstory.com (FullStory), and cdn.mouseflow.com (Mouseflow). Session recording services can capture significant amounts of sensitive information depending on their configuration and what the user types during the recorded session.

**Error reporting requests** go to monitoring services that receive crash reports and error logs. Common services include sentry.io (Sentry) and bugsnag.com (Bugsnag). Error reports can contain fragments of application state that include user content, depending on implementation.

**Content delivery network requests** go to CDNs that serve static assets - fonts, stylesheets, scripts. Common CDN domains include fonts.googleapis.com (Google Fonts), cdnjs.cloudflare.com (Cloudflare CDN), and unpkg.com. CDN requests for assets like fonts represent a data flow - the CDN operator receives your IP address and the page requesting the resource - but are generally lower-sensitivity than analytics or advertising requests.

**Authentication requests** go to identity services. Common services include accounts.google.com (Google Sign-In), api.auth0.com (Auth0), and similar. These are expected for applications that use third-party authentication. They tell the authentication provider that you are accessing this application at this time.

The category of requests that should most concern a user evaluating privacy claims is analytics and advertising requests - particularly when they appear before any user interaction, and particularly when the application's marketing does not clearly disclose the presence of these third parties.

## The Privacy Policy Cross-Check

Having identified the third-party domains receiving requests from the application, cross-check this list against the application's privacy policy. Look for the section that discloses third-party data sharing, typically titled something like "Third-Party Services," "Data Sharing," or "Service Providers."

Does the privacy policy name the specific third parties whose domains you identified in the network tab? If you found requests to Amplitude, Segment, and Hotjar, does the privacy policy mention these services by name and describe what data they receive? Or does the privacy policy use general language like "trusted third-party service providers" without naming them?

The specificity gap between the actual third-party data flows and the privacy policy's disclosure of those flows is itself informative. A privacy policy that names specific sub-processors and describes their data access reflects genuine transparency. A privacy policy that uses category descriptions broad enough to encompass any conceivable sharing arrangement provides the legal form of disclosure without the substance.

If you find third-party domains in the network tab that are not disclosed in the privacy policy - or that are disclosed only under category descriptions so vague they provide no real information - you have identified a disclosure gap that is worth factoring into your assessment of how seriously the application takes its privacy commitments.

## Testing Offline Behavior: The Connectivity Test

A second practical test evaluates how an application behaves when network access is not available. This test distinguishes between applications that genuinely operate locally and applications that maintain the appearance of local operation while actually depending on network connectivity for core functions.

To perform this test, open the application in your browser. Load it fully so it is in its normal operating state. Then disconnect your device from the internet - turn off Wi-Fi, disconnect the Ethernet cable, or if you want to be more precise, use the developer tools' Network panel to throttle connectivity to "Offline" using the throttling control available in Chrome's developer tools.

Now try to use the application normally. Open an existing note and read it. Edit it. Search for something. Navigate between sections. Create a new note.

What happens tells you something meaningful about the application's architecture. If the application continues to function fully - reading, editing, searching, and organizing work exactly as they did with connectivity - the application maintains a local data store that is the actual working data, not a cache of server data.

If the application shows loading spinners, error messages, or partially degraded functionality - some content accessible but not all, or read-only access but not editing - it reveals that the application's normal functioning depends on server communication for at least some operations.

If the application becomes completely non-functional, displaying error messages about connectivity and refusing to show content you were using seconds ago, it reveals that the application is entirely server-dependent - the local browser environment has no meaningful data store, only a renderer for data that lives on a server.

The relevance to privacy is direct. An application that functions fully offline does so because the data lives locally - on your device. An application that requires connectivity to function keeps its data on a server. If the data lives on the server, the server has the data. If the server has the data, the privacy question is about the server's policies and security, not about any local privacy properties.

The offline test cannot prove that an application has no server-side data store - some applications are architecturally hybrid. But it provides a fast, practical signal about the nature of the data architecture that complements the network tab inspection.

## Reading App Permissions: What Access Is Being Requested

For mobile applications, the permissions requested by the application provide a complementary verification signal. Mobile operating systems - iOS and Android - require applications to explicitly request permission for access to sensitive device capabilities and data. The permissions requested by an application should match its stated functionality.

A note-taking application that claims to focus on privacy and offline use should require minimal permissions. It needs storage access to read and write note files. It might need camera access for photo capture. It might need microphone access for voice notes. These are functional permissions with clear relationships to the application's stated purpose.

A note-taking application that requests access to contacts, advertising identifiers, cross-app tracking permissions, location, or other capabilities not needed for note-taking functionality is requesting access that serves purposes beyond the stated functionality - almost certainly advertising targeting, behavioral profiling, or data broker pipelines.

On iOS, the App Privacy section of an application's App Store listing provides a structured disclosure of data types collected and their uses. Review this disclosure for any application you are evaluating. Look for the categories listed under "Data Used to Track You" and "Data Linked to You." These categories cover the data types that Apple requires applications to disclose. An application that discloses extensive data collection under these categories is providing the data for those uses regardless of what its marketing says about privacy.

On Android, the Data Safety section in the Google Play Store provides equivalent disclosures. The same evaluation applies: look for what is disclosed under data sharing and data collection, and compare it to the application's privacy marketing.

The permissions test works best as a cross-check rather than a standalone verification. Permissions tell you what access is requested; they do not tell you what is done with the data collected through that access. Combined with the network tab inspection and the policy cross-check, they provide a more complete picture.

## The Terms of Service Change History Test

Privacy policies and terms of service are not static documents. They change. And the direction of change - toward greater user protection or away from it - tells you something meaningful about the application developer's priorities and incentives.

Most privacy policy pages display an "effective date" or "last updated" date near the top of the document. Some applications maintain a version history or changelog of their privacy policy, linked from the policy page itself. When evaluating an application's privacy claims, checking whether this history is available and reviewing what has changed provides a useful signal.

To find the change history for an application's privacy policy, try the following approaches in order. First, look for a "previous versions" link or "view change history" option on the privacy policy page itself. Some applications proactively maintain this for transparency. Second, use the Wayback Machine at web.archive.org - enter the URL of the application's privacy policy page and look for archived snapshots across time. Comparing the current version against a version from two or three years ago shows what language has been added, removed, or modified.

When reviewing changes, pay specific attention to: expansions in the scope of the data collection described, new categories of "partners" or "affiliates" with whom data can be shared, new provisions allowing AI training uses of user content, changes to the opt-out mechanisms for data uses (particularly if opt-out has become harder or been removed), and changes to the jurisdiction or arbitration clauses governing disputes.

An application that has added language permitting AI training of user content over the past two years, or that has expanded the scope of third-party sharing without improving the specificity of disclosures, or that has removed opt-out mechanisms that previously existed - this is an application whose privacy trajectory is moving in a direction unfavorable to users. An application whose privacy policy changes have moved toward greater specificity, stronger user rights, and narrower data use - this is an application reflecting a different set of priorities.

The change history test does not require reading legal documents in full. It requires looking for the delta between what the policy said before and what it says now, and asking whether that delta represents a company moving toward users or away from them.

## Security Audit and Certification Signals

Beyond the tests you can run yourself, independently verified security assessments provide another layer of verification for applications whose developers have commissioned them.

A penetration test or security audit conducted by a reputable third-party security firm - and published - provides evidence that the application's security claims have been examined by parties with the expertise to find flaws. The existence of a published audit does not guarantee the absence of all vulnerabilities - audits are bounded in scope and time - but it indicates that the developer has subjected their implementation to external scrutiny and was willing to publish the results.

When an application publishes a security audit, review what was in scope. An audit that covered the network communication layer but not the encryption implementation, or that covered the web application but not the mobile client, provides partial assurance. An audit whose scope matches the privacy claims being made - that the zero-network-request claim was tested, that the encryption implementation was reviewed - provides more directly relevant assurance.

Bug bounty programs are a related signal. An application with an active bug bounty program that rewards security researchers for finding vulnerabilities is an application that has created an ongoing incentive for external scrutiny of its security properties. The existence of a bug bounty does not prove absence of vulnerabilities, but it demonstrates a commitment to finding them through independent discovery.

Certifications like ISO 27001, SOC 2 Type II, and FedRAMP address organizational security practices rather than specific application privacy properties, but they indicate that the developer has subjected their security management practices to external audit. These certifications are most relevant for applications used in enterprise and regulated industry contexts.

For applications that are genuinely local-first with zero network requests, the most powerful security validation is the architectural simplicity itself - an application that transmits no data has no server-side security surface to audit, and the relevant security properties (encryption implementation, local storage security) can be verified directly by the user through the tests described in this guide.

## The Encryption Verification Test

For applications that claim to encrypt your data, a practical verification test checks whether the encryption is meaningful. This test requires a bit more engagement than the network tab inspection but remains accessible without technical background.

The key question for encryption is who holds the decryption key. Encryption where the service holds the key protects you from unauthorized third parties who might access the server but does not protect you from the service itself. Encryption where you hold the key - derived from a password that never leaves your device - protects you from both.

To test this practically, ask: can you access your encrypted data without your password? If the service has a "forgot password" feature that allows account recovery without your encryption password - sending a recovery link to your email, for example - then the service either stores your data in a decryptable form without requiring your password, or stores the key separately from the password in a way that allows recovery. Either scenario indicates that the encryption is not genuinely user-keyed - the service has some path to your data that does not depend on your specific password.

If losing your password means permanently losing access to your encrypted data, with no recovery path, that is a signal that the encryption is genuinely keyed to your password with no server-side key copy. This is a stronger privacy guarantee, though it requires the user to maintain their password carefully.

For applications that store data locally and claim per-entry encryption, the test is more direct. Encrypt an entry. Close the application. Navigate to the vault folder on your file system and open the stored file for that entry in a text editor. What do you see? If you see readable text that corresponds to the content you typed, the "encryption" is either not applied to the stored file or is trivially bypassed. If you see a block of unintelligible characters - the ciphertext - the encryption is applied to the stored file. The ciphertext should be unreadable regardless of how long you look at it.

This stored-file inspection is a direct, immediate, and verifiable test of whether local encryption is actually applied to the data at rest. It requires no technical knowledge beyond the ability to navigate a file system and open a file in a text editor.

## Checking for Third-Party Trackers: The Browser Extension Test

For a more comprehensive inventory of third-party trackers embedded in a web application, browser privacy extensions provide a convenient automated test that complements the manual network tab inspection.

Privacy Badger, developed by the Electronic Frontier Foundation, detects and blocks tracking requests based on observed behavior patterns. uBlock Origin, a widely used content blocker, detects requests to known tracker and advertising domains based on maintained blocklist databases. Both extensions are available for Chrome, Firefox, and other major browsers, and both are free.

Install one of these extensions in a test browser profile. Navigate to the application you want to evaluate. The extension's icon in the browser toolbar typically shows a count of blocked or detected trackers. Clicking the icon shows a list of the third-party domains detected, categorized by type.

This test provides a faster enumeration of common tracking domains than the manual network tab inspection, because the extension databases catalog thousands of known tracker domains that would require manual identification in the network tab. The trade-off is that the extension databases are not exhaustive - novel or less common tracking domains may not appear in the blocklists - and some legitimate domains may be incorrectly identified as trackers.

Used as a complement to the manual network tab inspection, the extension test provides a quick first-pass identification of common trackers that can then be investigated more thoroughly through the network tab.

## The Open Source Verification Path

For applications that publish their source code, code review provides the deepest verification available. Source code is ground truth - it shows exactly what the application does, unfiltered by marketing or legal language.

You do not need to read code to use open source as a verification signal. The existence and activity of a public code repository - typically on GitHub, GitLab, or a similar platform - provides several useful signals even for non-technical users.

First, it confirms that independent review is possible. Security researchers, privacy auditors, and other developers can inspect the code. If serious privacy violations were present in the code, they could be discovered and disclosed by the research community. The theoretical accessibility of code to scrutiny is different from actual scrutiny having occurred, but it is a meaningful property.

Second, the commit history shows active development. An active repository with regular commits, closed issues, and responsive maintainers indicates a living project where problems are identified and addressed. A repository that has not been updated in years, has many open unresolved issues, and shows no recent activity may indicate code that is functional but not actively maintained for security.

Third, you can search the repository for specific terms associated with tracking or data collection. Searching the repository for domain names you identified in the network tab inspection - if the application is open source - can verify whether those requests are in the application's own code, in a third-party library, or absent entirely.

For applications that are not open source, the absence of a public code repository does not itself indicate privacy violations - many legitimate, privacy-respecting applications are proprietary. But for claims about technical properties like zero network requests, local-only storage, or specific encryption implementations, open source code provides a verification pathway that closed-source applications cannot match.

## The App Store Review Pattern Analysis

User reviews in app stores and software review platforms provide a crowd-sourced signal about application behavior that has occasionally surfaced privacy issues before formal investigation or disclosure. This is not a rigorous technical test, but it is a practical signal worth checking.

Specifically, look for reviews that mention unexpected battery drain, unexpected data usage, or unusual device behavior. Privacy-invasive applications that run background processes for tracking or data collection sometimes produce these observable symptoms. A note-taking application with dozens of reviews mentioning unexpected high data usage is a note-taking application that may be transmitting more data than its marketing suggests.

Search for the application name combined with terms like "privacy," "data collection," "tracking," or "sends data" in general web searches and in the reviews section of app stores. Security researchers and privacy-focused publications periodically investigate specific applications. If an application has been the subject of a privacy investigation or has appeared in reporting about data collection practices, that reporting is findable through a basic search.

This check is imperfect - the absence of reported issues does not mean no issues exist, and review manipulation is a real phenomenon. But it costs very little time and occasionally returns information that directly answers questions about an application's data practices.

## What a Genuinely Private Application Looks Like Under These Tests

Performing these tests on different applications produces results that vary dramatically. Understanding what the results of a genuinely private application look like helps calibrate expectations.

A genuinely private, local-first application with zero network requests produces the following results across the tests:

The network tab inspection shows zero requests to any domain during normal operation - including analytics domains, advertising domains, session recording services, CDNs, and the application's own domain. The panel remains empty throughout a normal working session. This is verifiable, repeatable, and not explainable by any application behavior other than the absence of network requests.

The offline test shows full functionality regardless of connectivity status. Every feature - reading, writing, searching, organizing, encrypting, exporting - works identically when offline as when online, because the application has no online component that affects functionality.

The permissions audit shows minimal permissions requests aligned with functional necessity - storage access, perhaps camera and microphone for capture features, nothing beyond what the application's stated purpose requires.

The encryption verification test shows unintelligible ciphertext in the stored files for encrypted entries, with no server-side recovery path for password-protected content.

The open source check, if applicable, shows specific implementation details about encryption algorithms, key derivation parameters, and the confirmed absence of any network request code.

These results are not hypothetical. They describe the behavior of applications specifically designed around the architectural commitment to zero network requests and local-first data storage. They are verifiable by anyone, with any device, using tools already present in every modern browser.

## Running the Tests on VaultBook

VaultBook was designed with the architectural properties that produce passing results on every one of these verification tests. Running the tests produces results that illustrate concretely what genuine privacy verification looks like.

**Network tab inspection:** Open VaultBook in a browser. Open developer tools and navigate to the Network tab. Clear existing entries. Use VaultBook for a full session - create entries, search the vault, open attachments, use the AI Suggestions carousel, run a question-and-answer search, navigate through pages, use the Timetable. Watch the network panel throughout.

The result is an empty panel. Zero requests. Not a few requests to first-party infrastructure - zero requests to any domain. VaultBook is a single self-contained HTML file that loads entirely from the local file system. Once loaded, it operates entirely within the browser using the File System Access API to read and write to the local vault folder. There is no server to send requests to, no analytics SDK to call home, no authentication service to ping. The network panel remains empty because there is no mechanism in VaultBook's architecture by which a network request could occur.

**Offline test:** Disconnect from the internet while VaultBook is open. Create entries, search, use every feature. The application continues to function identically. There is no functionality that depends on connectivity because there is no functionality that uses the network. The offline test produces no degradation because there is no online component to lose.

**Encryption verification:** Enable encryption on an entry in VaultBook, entering a password of your choice. Save the entry. Close VaultBook. Navigate to your vault folder on your file system. Open the attachments directory and find the sidecar Markdown file for the encrypted entry. Open it in a text editor. The file contains ciphertext - an unintelligible block of encoded characters. It is not readable text. It is the AES-256-GCM encrypted output of the entry's content, encrypted with a key derived from your password through PBKDF2 with 100,000 iterations, a random 16-byte salt, and a random 12-byte initialization vector. Without your password, it is computationally infeasible to read.

**Password recovery test:** VaultBook has no account, no email address, and no server-side component. There is no "forgot password" feature for encrypted entries because there is no server to implement such a feature. If you lose the password for an encrypted entry, the entry's content is inaccessible - not because VaultBook's recovery system failed, but because the encryption is genuinely user-keyed with no server-side copy of the key. This property, which might seem like a disadvantage, is the privacy guarantee: VaultBook cannot decrypt your entries because it holds no key.

**Permissions audit:** VaultBook requires the file system access permission granted through the browser's File System Access API dialog when you first connect your vault folder. This permission is required to read and write the vault's local files. No other permissions are required. No advertising identifiers, no contacts access, no location, no cross-app tracking.

**Third-party tracker extension test:** Running uBlock Origin or Privacy Badger while using VaultBook shows zero detected trackers. There are no analytics SDKs, no advertising pixels, no session recording services, no social media plugins. The application contains no code that would register as a tracker, because it contains no code that communicates with external services.

Each of these results is independently verifiable by any VaultBook user at any time, using the tools described in this guide. The privacy claims are not asserted - they are demonstrable. That distinction is exactly what this guide exists to help users evaluate.

## The Comparison: Running the Same Tests on Popular Cloud Apps

For context, running the same battery of tests on major free cloud-based note-taking applications typically produces a very different set of results.

The network tab inspection on a major cloud note-taking application loading in a fresh browser session commonly shows dozens of requests before the user has typed a single character. These requests typically include: first-party API calls to the application's servers to authenticate the session and load account data; requests to Google Analytics or similar analytics services; requests to error reporting services; requests to CDNs for fonts, stylesheets, and JavaScript libraries; and sometimes requests to advertising or behavioral analytics platforms. The count of distinct third-party domains receiving requests in a single session can exceed ten for applications with extensive analytics and monitoring instrumentation.

The offline test on a cloud-first application typically shows degraded or non-functional behavior when connectivity is removed. Some applications display cached content in read-only mode. Others show error messages. Some become completely non-functional. The degradation pattern reveals the degree of server dependency.

The encryption verification test on cloud applications that offer "encrypted" storage frequently reveals that the encryption is at-rest server-side encryption managed by the service - meaning the service holds the key. The "forgot password" test, if the application has a recovery feature that works without the original encryption password, confirms that the encryption key is accessible to the service independently of the user's password.

The results of the same tests on different applications illuminate the spectrum between genuine privacy architecture and privacy as marketing language. The tests do not require trusting any party's claims. They produce observable, measurable outcomes.

## Building a Personal Privacy Verification Practice

The verification tests described in this guide become more valuable with practice. Running them once on one application provides a single data point. Running them regularly, on new applications before committing sensitive data to them, on existing applications periodically to check for changes, and on applications that make privacy claims that seem inconsistent with their business model - builds a calibrated sense of what different levels of privacy commitment look like in practice.

Several habits make the practice sustainable without requiring significant time investment:

Run the network tab test before committing to any new application that will hold sensitive data. The test takes five minutes. The information it provides is immediately actionable.

When an application updates its privacy policy or sends a notification about changed terms, run the network tab test again. Application updates sometimes add analytics instrumentation that was not present in earlier versions.

When an application is acquired, run the full battery of tests. Post-acquisition integration work sometimes introduces tracking and analytics from the acquiring company's infrastructure. Applications that passed the privacy tests pre-acquisition may not pass them post-acquisition.

When you read coverage of an application's privacy practices in security research or journalism, run the specific tests related to the reported issues. If a researcher reports that an application sends search queries to a third-party analytics service, you can verify this directly in the network tab by running a search and watching for the reported domain.

The goal is not to become a full-time privacy researcher. The goal is to develop a calibrated, independent perspective on the privacy claims of the applications that hold your most sensitive information - a perspective grounded in observable evidence rather than marketing language.

## From Verification to Decision

Verification informs decisions, but verification alone does not make decisions. Once you have run the tests and have concrete information about an application's actual data practices, the decision question is how to weigh that information against other considerations.

The sensitivity of the data you intend to store is the primary factor. An application that sends analytics telemetry to Segment and Amplitude is a different risk for a grocery list than for clinical notes, legal work product, or a professional journal accumulated over years of practice. The verification tests produce information; what matters is how that information intersects with the sensitivity of the content involved.

The practical utility of the application matters. Privacy is a consideration in tool choice, not the only consideration. An application that passes every privacy test but is cumbersome to use, lacks important features, or does not integrate with your workflow may be a worse overall choice than an application with a slightly weaker privacy posture that you will actually use consistently and effectively.

The trajectory of the application's privacy posture matters. An application that has improved its privacy practices over time - removing tracking, reducing third-party dependencies, adding user-held encryption - is a different risk than one whose tracking instrumentation has grown with each update.

What the verification practice provides is information - accurate, independently obtained, not dependent on trusting any party's self-description. How to use that information in decisions about tool choice is a personal judgment call. But making that judgment call with accurate information is categorically different from making it based on a landing page claim, a privacy policy written by corporate lawyers, or a certification badge whose requirements you have never examined.

The tests in this guide give you access to information that the people who built the applications would rather you not check. The fact that you can check - that the evidence is visible in your own browser, testable with your own device, requiring no special access or expertise - is the useful reality that turns "privacy" from a marketing claim into a verifiable property.

Your data is worth checking for. And now you know how.

VaultBook - your personal digital vault. Private, encrypted, and always under your control.
