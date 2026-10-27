
const tools = [

    // CHATBOTS

    {
        name: "ChatGPT",
        category: "Chatbot",
        icon: "🤖",
        description: "AI assistant for answering questions, writing, learning, brainstorming and productivity.",
        url: "https://chatgpt.com",
        type: "Freemium"
    },

    {
        name: "Google Gemini",
        category: "Chatbot",
        icon: "✨",
        description: "Google's powerful AI assistant for research, writing, learning and everyday tasks.",
        url: "https://gemini.google.com",
        type: "Freemium"
    },

    {
        name: "Claude",
        category: "Chatbot",
        icon: "🧠",
        description: "AI assistant for writing, coding, analyzing documents and complex conversations.",
        url: "https://claude.ai",
        type: "Freemium"
    },

    {
        name: "Perplexity AI",
        category: "Chatbot",
        icon: "🔎",
        description: "AI-powered search engine that provides answers with useful source references.",
        url: "https://www.perplexity.ai",
        type: "Freemium"
    },

    {
        name: "Microsoft Copilot",
        category: "Chatbot",
        icon: "🌐",
        description: "Microsoft's AI assistant for searching, writing and everyday productivity.",
        url: "https://copilot.microsoft.com",
        type: "Freemium"
    },

    {
        name: "DeepSeek",
        category: "Chatbot",
        icon: "🐋",
        description: "AI assistant for programming, reasoning, mathematics and general questions.",
        url: "https://chat.deepseek.com",
        type: "Free"
    },

    {
        name: "Poe",
        category: "Chatbot",
        icon: "💬",
        description: "Access and explore different AI chatbots from one convenient platform.",
        url: "https://poe.com",
        type: "Freemium"
    },


    // IMAGE AI

    {
        name: "Leonardo AI",
        category: "Image",
        icon: "🎨",
        description: "Generate creative AI artwork, illustrations, game assets and stunning images.",
        url: "https://leonardo.ai",
        type: "Freemium"
    },

    {
        name: "Microsoft Designer",
        category: "Image",
        icon: "🖼️",
        description: "Create AI-generated images and attractive visual designs.",
        url: "https://designer.microsoft.com",
        type: "Freemium"
    },

    {
        name: "Ideogram",
        category: "Image",
        icon: "🌈",
        description: "Generate beautiful AI images, typography, posters and creative artwork.",
        url: "https://ideogram.ai",
        type: "Freemium"
    },

    {
        name: "Playground AI",
        category: "Image",
        icon: "🪄",
        description: "Create and edit visual content using AI-powered design tools.",
        url: "https://playground.com",
        type: "Freemium"
    },

    {
        name: "Adobe Firefly",
        category: "Image",
        icon: "🔥",
        description: "Generate and edit creative images using Adobe's generative AI.",
        url: "https://firefly.adobe.com",
        type: "Freemium"
    },


    // VIDEO AI

    {
        name: "Runway",
        category: "Video",
        icon: "🎬",
        description: "AI-powered creative platform for video generation and editing.",
        url: "https://runwayml.com",
        type: "Freemium"
    },

    {
        name: "Pika",
        category: "Video",
        icon: "🎥",
        description: "Create imaginative AI-generated videos using text and images.",
        url: "https://pika.art",
        type: "Freemium"
    },

    {
        name: "CapCut",
        category: "Video",
        icon: "✂️",
        description: "Video editing platform with AI captions, effects and creative tools.",
        url: "https://www.capcut.com",
        type: "Freemium"
    },

    {
        name: "InVideo AI",
        category: "Video",
        icon: "📹",
        description: "Generate and edit videos with AI-powered tools and templates.",
        url: "https://invideo.io",
        type: "Freemium"
    },

    {
        name: "Luma AI",
        category: "Video",
        icon: "🎞️",
        description: "AI platform for generating creative video and visual content.",
        url: "https://lumalabs.ai",
        type: "Freemium"
    },


    // CODING AI

    {
        name: "GitHub Copilot",
        category: "Coding",
        icon: "👨‍💻",
        description: "AI coding assistant that helps developers write and understand code.",
        url: "https://github.com/features/copilot",
        type: "Freemium"
    },

    {
        name: "Cursor",
        category: "Coding",
        icon: "⌨️",
        description: "AI-powered code editor designed to improve developer productivity.",
        url: "https://cursor.com",
        type: "Freemium"
    },

    {
        name: "Replit",
        category: "Coding",
        icon: "💻",
        description: "Online development platform with AI-assisted coding capabilities.",
        url: "https://replit.com",
        type: "Freemium"
    },

    {
        name: "Codeium",
        category: "Coding",
        icon: "⚡",
        description: "AI coding assistance for writing and completing code faster.",
        url: "https://codeium.com",
        type: "Freemium"
    },

    {
        name: "Blackbox AI",
        category: "Coding",
        icon: "🧑‍💻",
        description: "AI coding assistant for code generation, explanations and development.",
        url: "https://www.blackbox.ai",
        type: "Freemium"
    },


    // WRITING AI

    {
        name: "Grammarly",
        category: "Writing",
        icon: "✍️",
        description: "Improve grammar, spelling, clarity and professional writing.",
        url: "https://www.grammarly.com",
        type: "Freemium"
    },

    {
        name: "QuillBot",
        category: "Writing",
        icon: "📝",
        description: "AI paraphrasing, grammar checking and writing improvement tools.",
        url: "https://quillbot.com",
        type: "Freemium"
    },

    {
        name: "DeepL Write",
        category: "Writing",
        icon: "📖",
        description: "Improve your writing style, grammar and sentence clarity.",
        url: "https://www.deepl.com/write",
        type: "Freemium"
    },

    {
        name: "LanguageTool",
        category: "Writing",
        icon: "📚",
        description: "Grammar, spelling and writing style checker for multiple languages.",
        url: "https://languagetool.org",
        type: "Freemium"
    },


    // AUDIO AI

    {
        name: "ElevenLabs",
        category: "Audio",
        icon: "🎙️",
        description: "Generate realistic AI voices and text-to-speech audio.",
        url: "https://elevenlabs.io",
        type: "Freemium"
    },

    {
        name: "Suno",
        category: "Audio",
        icon: "🎵",
        description: "Create original songs and music using artificial intelligence.",
        url: "https://suno.com",
        type: "Freemium"
    },

    {
        name: "Udio",
        category: "Audio",
        icon: "🎶",
        description: "Generate creative music and songs from text descriptions.",
        url: "https://www.udio.com",
        type: "Freemium"
    },

    {
        name: "Adobe Podcast",
        category: "Audio",
        icon: "🎧",
        description: "Enhance spoken audio recordings and improve voice clarity.",
        url: "https://podcast.adobe.com",
        type: "Freemium"
    },


    // DESIGN AI

    {
        name: "Canva",
        category: "Design",
        icon: "🖌️",
        description: "Create presentations, social media posts and graphics with AI features.",
        url: "https://www.canva.com",
        type: "Freemium"
    },

    {
        name: "Figma",
        category: "Design",
        icon: "🎯",
        description: "Collaborative UI and UX design platform with AI-powered features.",
        url: "https://www.figma.com",
        type: "Freemium"
    },

    {
        name: "Remove.bg",
        category: "Design",
        icon: "🪄",
        description: "Automatically remove backgrounds from images using AI.",
        url: "https://www.remove.bg",
        type: "Freemium"
    },

    {
        name: "Looka",
        category: "Design",
        icon: "💎",
        description: "Generate logo ideas and branding designs using AI technology.",
        url: "https://looka.com",
        type: "Freemium"
    }

];


// ELEMENTS

const toolsContainer = document.getElementById("toolsContainer");

const searchInput = document.getElementById("searchInput");

const categoryButtons = document.querySelectorAll(".category");

const resultsCount = document.getElementById("resultsCount");

const noResults = document.getElementById("noResults");

const toolCount = document.getElementById("toolCount");

let activeCategory = "All";


// DISPLAY TOTAL TOOLS

toolCount.textContent = tools.length + "+";


// DISPLAY TOOLS

function displayTools() {

    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredTools = tools.filter(tool => {

        const matchesSearch =
            tool.name.toLowerCase().includes(searchValue) ||
            tool.description.toLowerCase().includes(searchValue) ||
            tool.category.toLowerCase().includes(searchValue);

        const matchesCategory =
            activeCategory === "All" ||
            tool.category === activeCategory;

        return matchesSearch && matchesCategory;

    });


    toolsContainer.innerHTML = "";


    filteredTools.forEach(tool => {

        const card = document.createElement("div");

        card.className = "tool-card";

        card.innerHTML = `

            <div class="tool-header">

                <div class="tool-icon">
                    ${tool.icon}
                </div>

                <span class="tool-badge ${tool.type === "Freemium" ? "freemium" : ""}">
                    ${tool.type}
                </span>

            </div>

            <h3>${tool.name}</h3>

            <p class="tool-description">
                ${tool.description}
            </p>

            <div class="tool-bottom">

                <span class="tool-category">
                    ${tool.category}
                </span>

                <a
                    href="${tool.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="visit-btn"
                >
                    Visit Tool ↗
                </a>

            </div>

        `;

        toolsContainer.appendChild(card);

    });


    resultsCount.textContent = filteredTools.length + " Tools Found";


    if (filteredTools.length === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// SEARCH FUNCTION

searchInput.addEventListener("input", displayTools);


// CATEGORY FILTER

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        activeCategory = button.dataset.category;

        displayTools();

        document.getElementById("tools").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// SCROLL TO TOOLS

function scrollToTools() {

    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });

}


// INITIAL LOAD

displayTools();