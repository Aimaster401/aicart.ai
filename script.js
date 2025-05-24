// ==== Hamburger Menu Toggle ====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
}
// Menu ke bahar click hone par band ho jaye
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navMenu.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    navMenu.style.display = "none";
  }
});

// ==== Tool Data for Suggestions & Cards ====
const allTools = [
  "ChatGPT", "Google Gemini", "Midjourney", "GitHub Copilot", "Tabnine",
  "Amazon CodeWhisperer", "Replit AI", "Codium", "D-ID", "Runway ML",
  "Synthesia", "Copy AI", "Jasper", "Pictory", "Removebg", "bg remover",
  "Soundraw", "Canva AI", "Tome", "HeyGen", "Scribe", "leonardo", "tomeai",
  "Free AI Tools", "Paid AI Tools", "AI Developer Tools", "aidevelopertools", 
  "Developer", "write", "writingtools", "imagetools", "image", 
  "videotools", "video", "audiotools", "audio", "chatbot", "chatbottools","about", "about ai", "about us","about", "aicart about",
"aidevelopertools", "ai developer tools", "developer ai tools",
"aipicasso", "picasso ai",
"alteredstudio", "altered studio", "studio ai",
"animoto",
"anyword",
"artbreeder", "art breeder",
"audiotools",
"audoai", "audoai tools",
"bamboo",
"bard", "google bard",
"boomy",
"botsonic",
"canva",
"characterai", "character ai tool",
"chatbottools",
"chatgpt", "chatgpt ai", "openai chatgpt",
"claude", "anthropic claude",
"cleanvoice", "cleanvoice ", "clean voice ai",
"clearvoice", "clearvoice ",
"clearml",
"codet5", "code t5",
"codewhisperer", "codewhisperer ", "amazon codewhisperer",
"codex", "codex ai", "openai codex",
"codium",
"contact", "aicart contact",
"copilot", "github copilot",
"copyai", "copyai tool",
"copysmith",
"d-id", "d-id ",
"dall", "dall-e", "dalle", "dalle ", "openai dall-e",
"deepcode",
"deepdream", "google deepdream",
"deepl", "deepl translator",
"descript",
"designify",
"designsai", "designs ",
"drift",
"elai",
"elevenlabs",
"flexclip",
"flowxo", "flow xo",
"fotor",
"frase",
"freetools",
"gemini", "google gemini",
"grammarly",
"heygen",
"huggingface", "hugging face", "huggingface hub",
"imagetools", "image ai tool",
"aicart", "ai tools index", "ai tools directory",
"ink",
"invideo",
"jasper", "jasper ai tool",
"kapwing",
"kite",
"kitsai", "kitsai tool",
"kommunicate",
"krispy",
"lalalai", "lalalai tool",
"landbot",
"leonardo", "leonardo ai tool",
"letsenhance",
"lumen5",
"midjourney",
"mlflow",
"murf",
"notion",
"onnx",
"openvino",
"otter", "otter ai tool",
"outwrite",
"papercup",
"peppertype",
"perplexity", "perplexity ai tool",
"photoroom",
"pi", "inflectionpi","inflection",
"picsart",
"pictory",
"playht", "play ht",
"poe", "poe", "quora poe",
"polycoder",
"privacy", "privacy policy",
"quilibot", "quillbot",
"removebg",
"replika",
"replit",
"resemble", "resemble ai tool",
"robots.txt", "robots file",
"runwayml",
"rytr",
"scalenut",
"scispace",
"scribeai",
"simplified",
"soundraw",
"stablediffusion", "stablediffusion",
"steveal",
"style.css", "style file",
"sunoai",
"surferseo",
"synthesis",
"tabnine",
"terms", "terms and conditions",
"textcortex",
"tidio",
"tomeai",
"tomeal",
"veedio",
"videotools",
"voicemod",
"voicery",
"vyond",
"wandb",
"wisecut",
"wombo",
"wordtune",
"writercom",
"writesonic",
"writingtools",
"youchat", "you chat"
];
const contentToggle = document.getElementById("contentMenuToggle");
const contentDropdown = document.getElementById("contentDropdown");

if (contentToggle && contentDropdown) {
  contentToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    contentDropdown.style.display = contentDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!contentDropdown.contains(e.target) && e.target !== contentToggle) {
      contentDropdown.style.display = "none";
    }
  });
}
// ==== Tool Cards Data ====
const toolsData = {
  freetools: [
    {
      name: "ChatGPT (Free Version)",
      description: "OpenAI's conversational AI with limited free access",
      category: "Chatbot",
      link: "https://chat.openai.com",
      icon: "fa-comment-dots",
      page: "chatgpt.html"
    },
    {
      name: "Bard",
      description: "Google's experimental conversational AI service",
      category: "Chatbot",
      link: "https://bard.google.com",
      icon: "fa-robot",
      page: "bard.html"
    },
 {
  name: "Canva AI",
  description: "Design presentations, videos, and more with AI help",
  category: "Design",
  link: "https://www.canva.com/features/ai-image-generator/",
  icon: "fa-paint-brush",
  page: "canva.html"
},
{
  name: "Remove.bg",
  description: "Remove image background instantly with AI",
  category: "Image",
  link: "https://www.remove.bg",
  icon: "fa-image",
  page: "removebg.html"
},
{
  name: "Hugging Face Transformers",
  description: "Free transformer models for NLP & AI projects",
  category: "Development",
  link: "https://huggingface.co/transformers/",
  icon: "fa-code",
  page: "huggingface.html"
},
{
  name: "Google Gemini",
  description: "AI model from Google for text, image, and more",
  category: "Multimodal",
  link: "https://deepmind.google/technologies/gemini/",
  icon: "fa-brain",
  page: "gemini.html"
},
{
  name: "Tome AI",
  description: "AI storytelling and presentation creation tool",
  category: "Writing",
  link: "https://tome.app/",
  icon: "fa-file-alt",
  page: "tomeai.html"
},
{
  name: "Otter.ai",
  description: "AI-powered meeting transcription and notes",
  category: "Productivity",
  link: "https://otter.ai",
  icon: "fa-microphone-alt",
  page: "otter.html"
},
{
  name: "Grammarly (Free)",
  description: "Grammar and writing assistant with AI support",
  category: "Writing",
  link: "https://www.grammarly.com",
  icon: "fa-pen-nib",
  page: "grammarly.html"
},
{
  name: "Perplexity AI",
  description: "AI search engine that explains answers",
  category: "Search",
  link: "https://www.perplexity.ai/",
  icon: "fa-search",
  page: "perplexity.html"
},
{
  name: "Lumen5 (Free)",
  description: "Create engaging videos from blog content using AI",
  category: "Video",
  link: "https://lumen5.com",
  icon: "fa-video",
  page: "lumen5.html"
},
{
  name: "DeepL Translator",
  description: "Accurate AI-powered translation tool",
  category: "Language",
  link: "https://www.deepl.com/translator",
  icon: "fa-language",
  page: "deepl.html"
},
{
  name: "Leonardo AI",
  description: "AI art generation platform (Free Tier)",
  category: "Image",
  link: "https://leonardo.ai/",
  icon: "fa-palette",
  page: "leonardo.html"
},
{
  name: "Krispy.ai",
  description: "AI tool to remove background noise from calls",
  category: "Audio",
  link: "https://krisp.ai",
  icon: "fa-volume-up",
  page: "krispy.html"
},
{
  name: "SciSpace",
  description: "AI-powered research paper summarizer",
  category: "Education",
  link: "https://scispace.com",
  icon: "fa-book",
  page: "scispace.html"
}
  ],
  paidtools: [
    {
      name: "ChatGPT Plus",
      description: "Premium version of ChatGPT with GPT-4 access",
      category: "Chatbot",
      link: "https://chat.openai.com",
      icon: "fa-comment-dots",
      price: "$20/month",
      page: "chatgpt.html"
    },
    {
      name: "Midjourney",
      description: "AI art generation through Discord",
      category: "Image Generation",
      link: "https://www.midjourney.com",
      icon: "fa-palette",
      price: "$10-$60/month",
      page: "midjourney.html"
    },
    {
  name: "Jasper AI",
  description: "AI writing assistant for content creators",
  category: "Writing",
  link: "https://www.jasper.ai",
  icon: "fa-pen-nib",
  price: "$39+/month",
  page: "jasper.html"
},
{
  name: "Writesonic",
  description: "AI content and ad copy generator",
  category: "Marketing",
  link: "https://www.writesonic.com",
  icon: "fa-file-alt",
  price: "$16+/month",
  page: "writesonic.html"
},
{
  name: "SurferSEO",
  description: "SEO optimization powered by AI",
  category: "SEO",
  link: "https://surferseo.com",
  icon: "fa-search",
  price: "$59+/month",
  page: "surferseo.html"
},
{
  name: "Copy.ai (Pro)",
  description: "AI-powered copywriting and content tools",
  category: "Marketing",
  link: "https://www.copy.ai",
  icon: "fa-copy",
  price: "$49+/month",
  page: "copyai.html"
},
{
  name: "Grammarly Premium",
  description: "Advanced writing enhancement and suggestions",
  category: "Writing",
  link: "https://www.grammarly.com/premium",
  icon: "fa-spell-check",
  price: "$12+/month",
  page: "grammarly.html"
},
{
  name: "Murf AI",
  description: "AI voice generator for realistic voiceovers",
  category: "Audio",
  link: "https://murf.ai",
  icon: "fa-microphone",
  price: "$19+/month",
  page: "murf.html"
},
{
  name: "Synthesia",
  description: "AI avatar video generation",
  category: "Video",
  link: "https://www.synthesia.io",
  icon: "fa-video",
  price: "$30+/month",
  page: "synthesia.html"
},
{
  name: "Replika Pro",
  description: "AI chatbot companion with premium features",
  category: "Chatbot",
  link: "https://replika.ai",
  icon: "fa-robot",
  price: "$19.99/month",
  page: "replika.html"
},
{
  name: "Notion AI (Pro)",
  description: "Productivity assistant inside Notion",
  category: "Productivity",
  link: "https://www.notion.so/product/ai",
  icon: "fa-lightbulb",
  price: "$10+/month",
  page: "notion.html"
},
{
  name: "Descript",
  description: "AI-powered video and podcast editor",
  category: "Video",
  link: "https://www.descript.com",
  icon: "fa-film",
  price: "$12+/month",
  page: "descript.html"
},
{
  name: "CopySmith AI",
  description: "AI tool for eCommerce & product content",
  category: "E-commerce",
  link: "https://www.copysmith.ai",
  icon: "fa-cart-shopping",
  price: "$19+/month",
  page: "copysmith.html"
},
{
  name: "Wordtune Premium",
  description: "Rewrite and enhance your writing",
  category: "Writing",
  link: "https://www.wordtune.com",
  icon: "fa-edit",
  price: "$24.99/month",
  page: "wordtune.html"
},
{
  name: "Scalenut",
  description: "SEO + AI content generation platform",
  category: "SEO",
  link: "https://www.scalenut.com",
  icon: "fa-chart-line",
  price: "$39+/month",
  page: "scalenut.html"
}
  ],
  aidevelopertools: [
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that suggests code",
      category: "Coding",
      link: "https://github.com/features/copilot",
      icon: "fa-code",
      page: "copilot.html"
    },
    {
      name: "Amazon CodeWhisperer",
      description: "ML-powered coding companion",
      category: "Coding",
      link: "https://aws.amazon.com/codewhisperer/",
      icon: "fa-cloud",
      page: "codewhisperer.html"
    },
    {
  name: "Kite",
  description: "AI-powered coding assistant with real-time code completions",
  category: "Coding Assistant",
  link: "https://www.kite.com",
  icon: "fa-code",
  page: "kite.html"
},
{
  name: "Codium AI",
  description: "AI tool for generating tests and improving code quality",
  category: "Code Testing",
  link: "https://www.codium.ai",
  icon: "fa-bug",
  page: "codium.html"
},
{
  name: "Tabnine",
  description: "AI autocompletion for multiple programming languages",
  category: "Code Completion",
  link: "https://www.tabnine.com",
  icon: "fa-terminal",
  page: "tabnine.html"
},
{
  name: "Replit Ghostwriter",
  description: "AI code generator in Replit IDE",
  category: "Code Generator",
  link: "https://replit.com/site/ghostwriter",
  icon: "fa-laptop-code",
  page: "replit.html"
},
{
  name: "OpenAI Codex",
  description: "The model powering GitHub Copilot for general-purpose coding",
  category: "AI Coding Model",
  link: "https://openai.com/blog/openai-codex",
  icon: "fa-brain",
  page: "codex.html"
},
{
  name: "CodeT5",
  description: "Open-source transformer for code understanding and generation",
  category: "Open Source",
  link: "https://github.com/salesforce/CodeT5",
  icon: "fa-file-code",
  page: "codet5.html"
},
{
  name: "DeepCode",
  description: "AI-powered code review and static analysis",
  category: "Code Analysis",
  link: "https://www.deepcode.ai",
  icon: "fa-search",
  page: "deepcode.html"
},
{
  name: "PolyCoder",
  description: "AI model for writing C code",
  category: "Language Model",
  link: "https://huggingface.co/NinedayWang/PolyCoder",
  icon: "fa-c",
  page: "polycoder.html"
},
{
  name: "Intel OpenVINO",
  description: "Toolkit for optimizing deep learning models",
  category: "Model Deployment",
  link: "https://www.intel.com/openvino",
  icon: "fa-microchip",
  page: "openvino.html"
},
{
  name: "ONNX Runtime",
  description: "Cross-platform high-performance ML runtime",
  category: "Model Runtime",
  link: "https://onnxruntime.ai",
  icon: "fa-database",
  page: "onnx.html"
},
{
  name: "Weights & Biases",
  description: "Experiment tracking and model management",
  category: "MLOps",
  link: "https://wandb.ai",
  icon: "fa-chart-line",
  page: "wandb.html"
},
{
  name: "MLflow",
  description: "Open-source platform for the complete ML lifecycle",
  category: "MLOps",
  link: "https://mlflow.org",
  icon: "fa-sync-alt",
  page: "mlflow.html"
},
{
  name: "ClearML",
  description: "MLOps suite for tracking, orchestration and deployment",
  category: "MLOps",
  link: "https://clear.ml",
  icon: "fa-network-wired",
  page: "clearml.html"
}
  ],
  writingtools: [
    {
      name: "Jasper",
      description: "AI content generator for marketers",
      category: "Writing",
      link: "https://www.jasper.ai",
      icon: "fa-pen-fancy",
      page: "jasper.html"
    },
    {
      name: "Copy.ai",
      description: "AI-powered copywriting tool",
      category: "Writing",
      link: "https://www.copy.ai",
      icon: "fa-copy",
      page: "copyai.html"
    },
    {
  name: "Writesonic",
  description: "AI-powered platform for creating marketing content and blogs",
  category: "Writing",
  link: "https://writesonic.com",
  icon: "fa-pen-nib",
  page: "writesonic.html"
},
{
  name: "Rytr",
  description: "Content creation assistant that writes for multiple use cases",
  category: "Writing",
  link: "https://rytr.me",
  icon: "fa-keyboard",
  page: "rytr.html"
},
{
  name: "Scalenut",
  description: "SEO-focused AI content writer and optimizer",
  category: "SEO Writing",
  link: "https://www.scalenut.com",
  icon: "fa-chart-bar",
  page: "scalenut.html"
},
{
  name: "Anyword",
  description: "AI copywriting tool for ads, emails, and social posts",
  category: "Marketing Copy",
  link: "https://anyword.com",
  icon: "fa-bullhorn",
  page: "anyword.html"
},
{
  name: "Simplified",
  description: "AI content creation with templates and image tools",
  category: "Content Creation",
  link: "https://simplified.com",
  icon: "fa-magic",
  page: "simplified.html"
},
{
  name: "INK Editor",
  description: "AI writing tool with SEO optimization features",
  category: "SEO Writing",
  link: "https://inkforall.com",
  icon: "fa-lightbulb",
  page: "ink.html"
},
{
  name: "Wordtune",
  description: "AI rephrasing tool to improve clarity and tone",
  category: "Rewriting",
  link: "https://www.wordtune.com",
  icon: "fa-sync",
  page: "wordtune.html"
},
{
  name: "Peppertype.ai",
  description: "Generates content quickly for various use cases",
  category: "Writing",
  link: "https://www.peppertype.ai",
  icon: "fa-pen",
  page: "peppertype.html"
},
{
  name: "Frase.io",
  description: "AI tool for writing SEO-optimized content based on SERP",
  category: "SEO Content",
  link: "https://www.frase.io",
  icon: "fa-search",
  page: "frase.html"
},
{
  name: "Writer.com",
  description: "AI writing assistant for teams with grammar and tone check",
  category: "Team Writing",
  link: "https://writer.com",
  icon: "fa-users",
  page: "writercom.html"
},
{
  name: "Quillbot",
  description: "Paraphrasing and grammar correction tool",
  category: "Rewriting",
  link: "https://quillbot.com",
  icon: "fa-eraser",
  page: "quillbot.html"
},
{
  name: "TextCortex",
  description: "Write and expand content with AI inside your browser",
  category: "Browser Extension",
  link: "https://textcortex.com",
  icon: "fa-browser",
  page: "textcortex.html"
},
{
  name: "Outwrite",
  description: "AI-powered grammar checker and style improver",
  category: "Proofreading",
  link: "https://www.outwrite.com",
  icon: "fa-check-double",
  page: "outwrite.html"
}
  ],
  imagetools: [
    {
      name: "DALL-E 3",
      description: "Advanced AI image generation from text",
      category: "Image Generation",
      link: "https://openai.com/dall-e",
      icon: "fa-image",
      page: "dall.html"
    },
    {
      name: "Stable Diffusion",
      description: "Open source text-to-image model",
      category: "Image Generation",
      link: "https://stablediffusionweb.com",
      icon: "fa-paint-brush",
      page: "stablediffusion.html"
    },
    {
  name: "Midjourney",
  description: "AI-based image generation through Discord commands",
  category: "Image Generation",
  link: "https://www.midjourney.com",
  icon: "fa-palette",
  page: "midjourney.html"
},
{
  name: "Canva AI (Magic Design)",
  description: "Design anything using Canva’s AI-powered tools",
  category: "Graphic Design",
  link: "https://www.canva.com/features/ai-image-generator/",
  icon: "fa-brush",
  page: "canva.html"
},
{
  name: "Runway ML",
  description: "Create, edit, and enhance visuals with AI video & image tools",
  category: "Image/Video Editing",
  link: "https://runwayml.com",
  icon: "fa-magic",
  page: "runwayml.html"
},
{
  name: "Fotor AI",
  description: "Photo editing and AI image generation in one place",
  category: "Photo Editing",
  link: "https://www.fotor.com/features/ai-image-generator/",
  icon: "fa-camera",
  page: "fotor.html"
},
{
  name: "Deep Dream Generator",
  description: "Generate dream-like images using deep neural networks",
  category: "Art Generation",
  link: "https://deepdreamgenerator.com",
  icon: "fa-brain",
  page: "deepdream.html"
},
{
  name: "Picsart AI",
  description: "Photo editing, filters, and AI background remover",
  category: "Photo Editing",
  link: "https://picsart.com/ai-tools",
  icon: "fa-photo-film",
  page: "picsart.html"
},
{
  name: "Remove.bg",
  description: "Automatically remove image backgrounds using AI",
  category: "Background Removal",
  link: "https://remove.bg",
  icon: "fa-scissors",
  page: "removebg.html"
},
{
  name: "Let's Enhance",
  description: "Image upscaling and enhancement without losing quality",
  category: "Image Enhancement",
  link: "https://letsenhance.io",
  icon: "fa-expand",
  page: "letsenhance.html"
},
{
  name: "Artbreeder",
  description: "Create new artwork by blending images with AI",
  category: "Creative Art",
  link: "https://www.artbreeder.com",
  icon: "fa-images",
  page: "artbreeder.html"
},
{
  name: "Designify",
  description: "One-click background remover and smart photo enhancer",
  category: "Auto Design",
  link: "https://www.designify.com",
  icon: "fa-magic",
  page: "designify.html"
},
{
  name: "Dream by Wombo",
  description: "Generate artwork from text using neural networks",
  category: "AI Art",
  link: "https://www.wombo.art",
  icon: "fa-paintbrush",
  page: "wombo.html"
},
{
  name: "AI Picasso",
  description: "Create modern art from simple prompts using AI",
  category: "Creative Design",
  link: "https://aipicasso.studio.site/",
  icon: "fa-palette",
  page: "aipicasso.html"
},
{
  name: "PhotoRoom",
  description: "AI tool for background removal and product photos",
  category: "E-commerce Photo Tool",
  link: "https://www.photoroom.com",
  icon: "fa-image",
  page: "photoroom.html"
}
  ],
  videotools: [
    {
      name: "Synthesia",
      description: "Create videos with AI avatars",
      category: "Video",
      link: "https://www.synthesia.io",
      icon: "fa-video",
      page: "synthesia.html"
    },
    {
      name: "Runway ML",
      description: "AI-powered video editing tools",
      category: "Video",
      link: "https://runwayml.com",
      icon: "fa-film",
      page: "runwayml.html"
    },
    {
  name: "Pictory AI",
  description: "Convert blog posts & scripts into engaging videos",
  category: "Video Creation",
  link: "https://pictory.ai",
  icon: "fa-video",
  page: "pictory.html"
},
{
  name: "Lumen5",
  description: "Transform text content into engaging videos for marketing",
  category: "Content to Video",
  link: "https://lumen5.com",
  icon: "fa-bullhorn",
  page: "lumen5.html"
},
{
  name: "Veed.io",
  description: "Online video editor with subtitles, transitions, and effects",
  category: "Video Editing",
  link: "https://www.veed.io",
  icon: "fa-clapperboard",
  page: "veedio.html"
},
{
  name: "Animoto",
  description: "Create marketing videos from photos and clips with AI",
  category: "Video Maker",
  link: "https://animoto.com",
  icon: "fa-video-camera",
  page: "animoto.html"
},
{
  name: "Wisecut",
  description: "AI-powered video editor that cuts silences and adds subtitles",
  category: "Auto Editing",
  link: "https://www.wisecut.video",
  icon: "fa-cut",
  page: "wisecut.html"
},
{
  name: "Kapwing AI",
  description: "Edit videos, auto-generate captions and visuals with AI",
  category: "Smart Editor",
  link: "https://www.kapwing.com",
  icon: "fa-magic",
  page: "kapwing.html"
},
{
  name: "Steve.AI",
  description: "Make animation and live-action videos from text",
  category: "Text to Video",
  link: "https://www.steve.ai",
  icon: "fa-file-video",
  page: "steveai.html"
},
{
  name: "Designs.ai Videomaker",
  description: "Create videos automatically using script and branding",
  category: "Video Branding",
  link: "https://designs.ai/tools/video",
  icon: "fa-video-slash",
  page: "designsai.html"
},
{
  name: "InVideo",
  description: "Create professional videos for social media and ads",
  category: "Marketing Videos",
  link: "https://invideo.io",
  icon: "fa-video",
  page: "invideo.html"
},
{
  name: "Elai.io",
  description: "Generate AI presenter videos from just text",
  category: "Avatar Video",
  link: "https://elai.io",
  icon: "fa-user-tie",
  page: "elai.html"
},
{
  name: "FlexClip",
  description: "Online AI video editor with templates and voiceover",
  category: "Online Editor",
  link: "https://www.flexclip.com",
  icon: "fa-scissors",
  page: "flexclip.html"
},
{
  name: "HeyGen",
  description: "Create talking avatar videos with AI voice cloning",
  category: "Avatar Video",
  link: "https://www.heygen.com",
  icon: "fa-face-smile",
  page: "heygen.html"
},
{
  name: "Vyond",
  description: "Animated video creation platform for businesses",
  category: "Animation",
  link: "https://www.vyond.com",
  icon: "fa-film",
  page: "vyond.html"
}
  ],
  audiotools: [
    {
      name: "Murf AI",
      description: "AI voice generator for realistic voiceovers",
      category: "Audio",
      link: "https://murf.ai",
      icon: "fa-microphone",
      page: "murf.html"
    },
    {
      name: "Resemble AI",
      description: "Clone voices with AI",
      category: "Audio",
      link: "https://www.resemble.ai",
      icon: "fa-headphones",
      page: "resemble.html"
    },
    {
  name: "Play.ht",
  description: "Realistic AI voice generation for podcasts & articles",
  category: "Text-to-Speech",
  link: "https://play.ht",
  icon: "fa-headphones",
  page: "playht.html"
},
{
  name: "Descript Overdub",
  description: "Clone your voice and edit audio by editing text",
  category: "Voice Cloning",
  link: "https://www.descript.com/overdub",
  icon: "fa-voicemail",
  page: "descript.html"
},
{
  name: "ElevenLabs",
  description: "High-quality voice synthesis with emotions and accents",
  category: "Voice AI",
  link: "https://elevenlabs.io",
  icon: "fa-microphone-lines",
  page: "elevenlabs.html"
},
{
  name: "Audo.ai",
  description: "AI-powered noise removal for voice clarity",
  category: "Audio Cleanup",
  link: "https://www.audo.ai",
  icon: "fa-volume-xmark",
  page: "audoai.html"
},
{
  name: "Voicemod",
  description: "Real-time AI voice changer for gaming and streaming",
  category: "Voice Effects",
  link: "https://www.voicemod.net",
  icon: "fa-masks-theater",
  page: "voicemod.html"
},
{
  name: "Cleanvoice AI",
  description: "Remove filler words, stutters and background noise",
  category: "Podcast Cleanup",
  link: "https://cleanvoice.ai",
  icon: "fa-broom",
  page: "cleanvoice.html"
},
{
  name: "Kits AI",
  description: "Create AI music vocals and instruments",
  category: "AI Music",
  link: "https://www.kits.ai",
  icon: "fa-music",
  page: "kitsai.html"
},
{
  name: "LALAL.AI",
  description: "Isolate vocals and instruments using AI",
  category: "Stem Separation",
  link: "https://www.lalal.ai",
  icon: "fa-guitar",
  page: "lalalai.html"
},
{
  name: "Voicery",
  description: "AI-generated natural-sounding speech for apps",
  category: "Speech AI",
  link: "https://www.voicery.com",
  icon: "fa-wave-square",
  page: "voicery.html"
},
{
  name: "Altered Studio",
  description: "Change voices or apply voice acting with AI",
  category: "Voice Editing",
  link: "https://www.altered.ai",
  icon: "fa-voice",
  page: "alteredstudio.html"
},
{
  name: "Papercup",
  description: "AI dubbing tool for translating video audio",
  category: "AI Dubbing",
  link: "https://www.papercup.com",
  icon: "fa-language",
  page: "papercup.html"
},
{
  name: "Boomy",
  description: "Create and publish AI-generated music tracks",
  category: "Music Creation",
  link: "https://www.boomy.com",
  icon: "fa-headphones-simple",
  page: "boomy.html"
},
{
  name: "Voice.ai",
  description: "Real-time AI voice changer for gaming and chatting",
  category: "Voice Modulator",
  link: "https://voice.ai",
  icon: "fa-microphone",
  page: "voiceai.html"
}
  ],
  chatbottools: [
    {
      name: "ChatGPT",
      description: "Advanced conversational AI by OpenAI",
      category: "Chatbot",
      link: "https://chat.openai.com",
      icon: "fa-comments",
      page: "chatgpt.html"
    },
    {
      name: "Claude AI",
      description: "Anthropic's conversational AI assistant",
      category: "Chatbot",
      link: "https://claude.ai",
      icon: "fa-robot",
      page: "claude.html"
    },
    {
  name: "Pi by Inflection AI",
  description: "A personal AI companion focused on emotional intelligence",
  category: "Chatbot",
  link: "https://heypi.com",
  icon: "fa-heart",
  page: "pi.html"
},
{
  name: "Google Gemini",
  description: "Google's next-gen AI model integrated in chatbot form",
  category: "Chatbot",
  link: "https://gemini.google.com",
  icon: "fa-google",
  page: "gemini.html"
},
{
  name: "YouChat",
  description: "AI chatbot integrated in a search engine with live data",
  category: "Search Chatbot",
  link: "https://you.com/chat",
  icon: "fa-search",
  page: "youchat.html"
},
{
  name: "Perplexity AI",
  description: "An answer engine with source-based chatbot replies",
  category: "Research Chatbot",
  link: "https://www.perplexity.ai",
  icon: "fa-lightbulb",
  page: "perplexity.html"
},
{
  name: "Character.AI",
  description: "Chat with AI personas including celebrities, fictional characters",
  category: "Entertainment Bot",
  link: "https://character.ai",
  icon: "fa-users",
  page: "characterai.html"
},
{
  name: "Poe by Quora",
  description: "Platform that allows access to multiple AI chatbots including Claude & GPT",
  category: "Multi-Bot Chat",
  link: "https://poe.com",
  icon: "fa-comments",
  page: "poe.html"
},
{
  name: "Replika",
  description: "AI chatbot companion that learns and grows emotionally",
  category: "Companion Bot",
  link: "https://replika.ai",
  icon: "fa-user-friends",
  page: "replika.html"
},
{
  name: "Tidio",
  description: "AI chatbot for customer support and automation",
  category: "Business Bot",
  link: "https://www.tidio.com",
  icon: "fa-briefcase",
  page: "tidio.html"
},
{
  name: "Botsonic",
  description: "No-code AI chatbot builder for websites & apps",
  category: "Custom Bot",
  link: "https://www.botsonic.ai",
  icon: "fa-cogs",
  page: "botsonic.html"
},
{
  name: "Drift",
  description: "AI sales chatbot for B2B marketing and lead capture",
  category: "Sales Chatbot",
  link: "https://www.drift.com",
  icon: "fa-chart-line",
  page: "drift.html"
},
{
  name: "Kommunicate",
  description: "Customer support automation with human + AI hybrid chatbot",
  category: "Support Bot",
  link: "https://www.kommunicate.io",
  icon: "fa-headset",
  page: "kommunicate.html"
},
{
  name: "Flow XO",
  description: "Create bots for Messenger, Slack, Telegram and websites",
  category: "Multi-platform Bot",
  link: "https://flowxo.com",
  icon: "fa-network-wired",
  page: "flowxo.html"
},
{
  name: "Landbot",
  description: "AI chatbot for landing pages and lead generation",
  category: "Lead Bot",
  link: "https://landbot.io",
  icon: "fa-magnet",
  page: "landbot.html"
}
  ]
};

// ==== Create Tool Cards ====
function createToolCards(tools, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = tools.map(tool => `
    <div class="tool-card">
      <div class="tool-icon">
        <i class="fas ${tool.icon}"></i>
      </div>
      <div class="tool-info">
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <div class="tool-meta">
          <span class="tool-category">${tool.category}</span>
          ${tool.price ? `<span class="tool-price">${tool.price}</span>` : ''}
        </div>
        <a href="${tool.link}" target="_blank" class="tool-link" onclick="event.stopPropagation()">
          Visit Tool <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  `).join('');

  // Add click event to cards
  const cards = container.querySelectorAll('.tool-card');
cards.forEach((card, index) => {
  const link = card.querySelector('a.tool-link');
  card.addEventListener('click', (e) => {
    if (e.target === link || link.contains(e.target)) return;
    
    const tool = tools[index];
    const fileName = tool.name.toLowerCase().replace(/\s+/g, "").replace(/[().]/g, "") + ".html";
    window.location.href = tool.page;
  });
});
}

// ==== Initialize All Tool Cards ====
function initializeAllToolCards() {
  for (const [category, tools] of Object.entries(toolsData)) {
    createToolCards(tools, category);
  }
}

// ==== Search Functionality ====
function setupSearch() {
  const searchIcon = document.getElementById("searchToggle");
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestionsList");

  if (!searchIcon || !searchContainer || !searchInput || !suggestionsList) return;

  // Toggle search visibility
  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = searchContainer.style.display === "block";
    searchContainer.style.display = isVisible ? "none" : "block";
    searchIcon.style.color = isVisible ? "#fff" : "#00ffcc";
    if (!isVisible) searchInput.focus();
  });

  // Close search when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && e.target !== searchIcon) {
      searchContainer.style.display = "none";
      searchIcon.style.color = "#fff";
      suggestionsList.innerHTML = "";
      searchInput.value = "";
    }
  });

  // Search input handling
  searchInput.addEventListener("input", () => {
    const input = searchInput.value.toLowerCase().trim();
    suggestionsList.innerHTML = "";

    if (!input) return;

    const filtered = allTools.filter(tool => 
      tool.toLowerCase().includes(input)
    );

    filtered.forEach(tool => {
      const li = document.createElement("li");
      li.textContent = tool;
      li.addEventListener("click", () => {
        searchInput.value = tool;
        suggestionsList.innerHTML = "";
        redirectFromSearch(tool);
      });
      suggestionsList.appendChild(li);
    });
  });

  // Enter key handling
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      redirectFromSearch(searchInput.value.trim());
    }
  });
}

// ==== Search Redirection Logic ====
function redirectFromSearch(tool) {
  const lowerTool = tool.toLowerCase().replace(/\s+/g, "").replace(/[()]/g, "");
  const redirectMap = {
    "free": "freetools.html",
    "paid": "paidtools.html",
    "developer": "aidevelopertools.html",
    "writing": "writingtools.html",
    "image": "imagetools.html",
    "video": "videotools.html",
    "audio": "audiotools.html",
    "chatbot": "chatbottools.html"
  };

  for (const [keyword, url] of Object.entries(redirectMap)) {
    if (tool.toLowerCase().includes(keyword)) {
      window.location.href = url;
      return;
    }
  }

  // Default: go to specific AI tool page if no keyword match
  window.location.href = lowerTool + ".html";
}

// ==== DOM Content Loaded ====
document.addEventListener("DOMContentLoaded", () => {
  initializeAllToolCards();
  setupSearch();

  // Agar current page index.html hai aur URL me #hash hai to use hata do
  if (window.location.pathname.includes("index.html") && window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // Sirf index.html par hi scroll adjust kare
  if (window.location.pathname.includes("index.html")) {
    window.addEventListener("load", adjustScrollForNavbar);
    window.addEventListener("hashchange", adjustScrollForNavbar);
  }
});
function adjustScrollForNavbar() {
  if (window.location.hash) {
    setTimeout(() => {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        const offset = 310;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }, 100); // 100ms delay to wait for DOM changes
  }
}
// ==== Show Search & Menu Intro Popups ====
function showIntroPopups() {
  const searchTip = document.getElementById("searchTip");
  const menuTip = document.getElementById("menuTip");

  searchTip.style.opacity = "1";
  menuTip.style.opacity = "1";

  setTimeout(() => {
    searchTip.style.opacity = "0";
    menuTip.style.opacity = "0";
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  showIntroPopups();
});