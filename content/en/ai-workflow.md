---
title: "AI workflow"
description: "How I work with AI: architecture first, small tasks with review, decisions recorded in the project. The model writes the code, the structure is mine."
---

<p class="page-lede">Where AI takes over the work, and where it doesn't.</p>

I work with AI every day, but not by handing over a task and waiting. The design and the decisions don't come from the model. It writes most of the code, the structure it works inside is mine.

### Architecture first

I start in a separate AI environment that isn't allowed to write code. That rule is explicit: design only. We talk through components, boundaries and data flows until it holds up, with diagrams alongside. Once the design is settled, I ask for an implementation prompt: a written brief for the model that writes the code. That prompt is the contract for the next phase.

### Small tasks, review after each one

The prompt is split into small tasks. After each one the model presents its work. I read it and I ask questions: why this, why like that. Sometimes the answer is good and I learn something, sometimes we do the task over.

While the model works on a task I'm not sitting around waiting: more often than not I'm already designing something else.

### The project remembers its own decisions

Every architecture decision goes into the repository as an ADR. Next to it sits an agent.md with my coding style and the rules that apply. A model starting on the project inherits those decisions instead of inventing them again. Where that isn't enough, I write a skill: a short instruction for one specific task. Almost all of them come out of something that went wrong first.

### Review by a second model

Once the branch is done, I have a different model review it. What one writes, another judges. That catches what I missed.

I don't take that review at face value. Reviewer models see edge cases everywhere and build constructions around them that make the system more complicated than it needs to be. I decide what survives.

### Committing is a decision

The model doesn't commit without my explicit permission. That's in the agent.md. Nothing enters a project's history that I haven't read.

<div class="page-closing">

My work has changed because of this. It's become more of a conversation: proposing, pushing back, correcting. I like working this way. It's also much faster, and I still only ship things I understand myself.

</div>
