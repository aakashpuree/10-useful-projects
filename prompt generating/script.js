document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        modelName: document.getElementById('modelName'),
        className: document.getElementById('className'),
        subject: document.getElementById('subject'),
        timeLeft: document.getElementById('timeLeft'),
        chapters: document.getElementById('chapters'),
        topics: document.getElementById('topics'),
        output: document.getElementById('promptOutput'),
        copyBtn: document.getElementById('copyBtn')
    };

    function generatePrompt() {
        // Fallbacks for the preview state
        const model = elements.modelName.value || 'GPT';
        const className = elements.className.value;
        const subject = elements.subject.value || '[SUBJECT]';
        const time = elements.timeLeft.value || '[TIME LEFT, e.g., 4 hours]';
        const chapters = elements.chapters.value || '[LIST OF CHAPTERS]';
        
        let topicsText = '';
        if (elements.topics.value.trim() !== '') {
            topicsText = `\n   - Important topics: ${elements.topics.value.trim()}`;
        }

        const classContext = className ? `I am in **${className}** and ` : '';
        const prompt = `Hey ${model}, ${classContext}I have an exam in **${subject}** in **${time}**, and I haven’t studied anything yet — not even basics.

I need a **high-efficiency crash course strategy** to pass the exam.

Here’s what you must do:

1. First, create a **time-based study plan** for the full duration (e.g., ${time}) focusing only on **high-impact topics**.

2. My syllabus includes:
   - Chapters: ${chapters}${topicsText}

3. We will study **one chapter at a time**. For each chapter, you must:

   - Explain concepts in **very simple language (beginner level)**
   - Give **exam-ready definitions**
   - Highlight **most important points (must revise)**
   - Provide **formulas (clearly separated)**
   - Include **short tricks / memory hacks**
   - Give **example numericals (if applicable)**
   - Provide **likely exam questions**
   - Add **MCQs with answers**
   - Ask me **quick questions to test my understanding**

4. If I don't understand something, simplify it further with **real-life examples or shortcuts**.

5. Focus only on **what is important for passing and scoring**, skip unnecessary theory.

6. At the end, give a **final revision checklist + predicted questions**.

We will go step by step. Start by giving me the **strategy + Chapter 1**.
  i say go and move to next topic of the chapter also 
Are you ready?`;

        elements.output.textContent = prompt;
    }

    // Attach event listeners to all input fields to trigger real-time updates
    [elements.modelName, elements.className, elements.subject, elements.timeLeft, elements.chapters, elements.topics].forEach(el => {
        el.addEventListener('input', generatePrompt);
    });

    // Copy to clipboard functionality
    elements.copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(elements.output.textContent).then(() => {
            const originalHTML = elements.copyBtn.innerHTML;
            
            // Show Success State
            elements.copyBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Copied!
            `;
            elements.copyBtn.classList.add('copied');
            
            // Revert state after 2 seconds
            setTimeout(() => {
                elements.copyBtn.innerHTML = originalHTML;
                elements.copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert("Clipboard access is required to copy the text.");
        });
    });

    // Generate initial prompt state on load
    generatePrompt();
});
