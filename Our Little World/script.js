document.addEventListener('DOMContentLoaded', () => {
  // ==== DARK MODE TOGGLE ====
  const toggleBtn = document.getElementById('toggle-dark');
  if (toggleBtn) {
    const savedMode = localStorage.getItem('dark-mode');
    const isDarkSaved = savedMode === 'enabled';
    document.body.classList.toggle('dark', isDarkSaved);
    toggleBtn.textContent = isDarkSaved ? '☀️' : '🌙';

    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
    });
  }

  // ==== FADE-IN ON SCROLL ====
  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  faders.forEach((fader, index) => {
    fader.style.transitionDelay = `${index * 0.25}s`;
    appearOnScroll.observe(fader);
  });

  // ==== RANDOM QUOTE ====
  const quoteBtn = document.getElementById('quoteBtn');
  const quoteDisplay = document.getElementById('quoteDisplay');
  const quoteList = [
'you are my favorite feeling.',
    'even the silence feels better with you.',
    'i didn\'t believe in soulmates until i met you.',
    'loving you is like breathing, i just do it without thinking.',
    'you make ordinary days feel magical.',
    'with you, every version of love feels new.',
    'you\'re the calm in all my storms.',
    'home isn\'t a place. it\'s you.',
    'your smile fixes everything.',
    'you\'re not just my love, you\'re my peace.',
    'i find pieces of you in every good thing i see.',
    'you walked in, and the rest of the world faded.',
    'i love who i am when i\'m with you.',
    'being with you feels like a deep breath after holding it for too long.',
    'you don\'t have to say a word. i still hear everything.',
    'you make time feel slower in the best way.',
    'you turned my ordinary into poetry.',
    'i never knew comfort could feel like a person until i met you.',
    'i want to grow old with the way you laugh.',
    'you are the kind of love that stays quiet and strong.',
    'i didn\'t know where i was going until your hand found mine.',
    'loving you made me softer, stronger, and braver.',
    'you\'re the one thing i look forward to in every day.',
    'somehow, you always know when to hold me without asking.',
    'you are the answer i didn\'t know i needed.',
    'you are the light i never saw coming.',
    'my heart speaks your name in every silent moment.',
    'with you, everything feels more alive.',
    'you make me want to be the best version of myself.',
    'i fell in love with your soul before your smile.',
    'your presence feels like a warm blanket after a cold day.',
    'i don\'t need a map when i\'m with you.',
    'you\'ve become the rhythm to all my days.',
    'every little thing you do stays with me.',
    'you\'re the reason i believe in gentle love.',
    'even my quiet moments are louder when you\'re near.',
    'you are the stillness in my chaos.',
    'i don\'t need the whole world when i have you.',
    'you bring color into parts of me i thought were dull.',
    'your laugh is a sound i want to grow old with.',
    'you are the soft place i always land.',
    'i would choose you in every version of my life.',
    'your love makes the ordinary feel sacred.',
    'i never get tired of the way you say my name.',
    'you feel like my favorite song playing on repeat.',
    'you\'re the pause i didn\'t know i needed.',
    'everything feels warmer with you in it.',
    'you\'re the reason i look at the sky a little longer.',
    'you\'ve made my world so much softer.',
    'when i\'m with you, even silence feels full.',
    'your kindness makes everything around you bloom.',
    'you\'re the moment i wish i could live in forever.',
    'your love taught me how to stay.',
    'you didn\'t just touch my heart. you stayed there.',
    'even in your absence, you feel present.',
    'you are the peace i write about in my quietest thoughts.',
    'you turn my worries into whispers.',
    'your love doesn\'t shout. it stays.',
    'you are the safe space i never knew i needed.',
    'you\'re the reason i find beauty in the little things.',
    'you feel like home in a world full of strangers.',
    'you are the gentle in all my storms.',
    'the way you look at me feels like sunrise.',
    'with you, even the hard days feel worth it.',
    'you are the love that asks for nothing but gives everything.',
    'you don\'t need to try. you just make me feel loved.',
    'you fill all the spaces i didn\'t know were empty.',
    'you are every quiet moment i never want to end.',
    'the world makes more sense when you\'re beside me.',
    'you are the echo of every wish i made without words.',
    'you made love feel like something i could trust again.',
    'with you, even time feels kind.',
    'you are the softness in my tough days.',
    'you made my world feel like something i want to stay in.',
    'you make the waiting worth it.',
    'you don\'t fix me, you stay with me while i grow.',
    'you are the warmth i didn\'t know i was missing.',
    'even when you\'re not near, your love holds me.',
    'you\'re the quiet yes in a loud world.',
    'you give me reasons to believe in forever.',
    'you\'re the little reminder that i\'m not alone.',
    'you bring peace just by being near.',
    'your love feels like sunlight through leaves.',
    'i carry you with me in everything i do.',
    'you are my safe thought in the middle of a storm.',
    'you love me in ways i never knew i needed.',
    'you make me feel like i\'ve always been understood.',
    'you feel like the start of something good, always.',
    'you are the rhythm i want to keep dancing to.',
    'your love sits quietly in my chest like a prayer.',
    'you are the quiet kind of magic.',
    'being loved by you feels like being seen completely.',
    'you are the moment i never want to end.',
    'you are the light i look for in every day.',
    'you are the reason i want to write love letters again.',
    'you feel like the right kind of forever.',
    'you don\'t complete me. you remind me i was whole all along.',
    'you are my favorite part of everything.',
    'you\'re the warmth i find in every season.',
    'you make the world less scary just by being in it.',
    'you\'re the comfort i never have to ask for.',
    'you are my favorite hello and my hardest goodbye.'
  ];

  if (quoteBtn && quoteDisplay) {
    quoteBtn.addEventListener('click', () => {
      quoteDisplay.classList.remove('show');
      setTimeout(() => {
        const random = quoteList[Math.floor(Math.random() * quoteList.length)];
        quoteDisplay.textContent = random;
        quoteDisplay.classList.add('show');
      }, 300);
    });
  }

  // ==== MOOD QUOTES ====
  const moodQuotes = {
anxious: [
    'it’s okay not to have all the answers right now.',
    'just breathe. you’ve made it this far.',
    'even your anxiety deserves gentleness.',
    'you don’t have to be okay to be loved.',
    'your worth isn’t measured by your calm.',
    'you’re allowed to slow down.',
    'this moment will pass. you’ve survived before.',
    'take your time. healing isn’t a race.',
    'you’re not a burden for needing reassurance.',
    'it’s okay to feel unsure. it means you care.',
    'hold yourself the way you’d hold someone you love.',
    'you don’t need to fight your thoughts. just notice them.',
    'there’s no shame in being sensitive.',
    'peace isn’t always silent. sometimes it’s shaky.',
    'it’s okay to pause, not quit.',
    'your presence is still valuable even when you’re quiet.',
    'you’re not weak for feeling too much.',
    'you can rest without earning it.',
    'your softness is not a flaw.',
    'breathe again. you made it to now.'
  ],
  calm: [
    'let yourself rest in this peace.',
    'your stillness is not emptiness. it’s healing.',
    'moments like this remind you: you’re safe.',
    'breathe in the quiet. it’s yours.',
    'peace doesn’t always mean perfect. just present.',
    'you are allowed to feel okay.',
    'softness is strength too.',
    'stillness can be a form of self-love.',
    'you don’t need to fix what’s not broken.',
    'you’ve earned this slow moment.',
    'right now, nothing is asking you to rush.',
    'this breath belongs only to you.',
    'you don’t have to explain why you’re at peace.',
    'calm is not the absence of emotion, it’s trust.',
    'let the world be quiet for a second.',
    'you’re allowed to enjoy the quiet without guilt.',
    'nothing is urgent in this moment.',
    'you are exactly where you’re meant to be.',
    'let peace be your anchor.',
    'slow is a kind of magic.'
  ],
  grateful: [
    'some days, the little things are everything.',
    'your heart remembers what matters most.',
    'thank you for showing up again today.',
    'gratitude softens the sharp edges of life.',
    'it’s beautiful how much you notice.',
    'there is joy in simply being here.',
    'your awareness is your gift.',
    'even this breath is a blessing.',
    'look how far you’ve come.',
    'you don’t need more to feel enough.',
    'sometimes the quietest joys last the longest.',
    'love lives in the small moments too.',
    'your kindness is its own reward.',
    'your presence is someone’s joy.',
    'you carry light, even when you don’t see it.',
    'this day mattered because you were in it.',
    'you make the world warmer.',
    'life didn’t have to give you this moment, but it did.',
    'your existence is already a reason to be thankful.',
    'you bring gratitude wherever you go.'
  ],
  lonely: [
    'even when you feel alone, you are held in love.',
    'it’s okay to long for connection. we all do.',
    'someone out there understands. really.',
    'you haven’t been forgotten.',
    'your voice still matters, even in silence.',
    'it’s okay to miss what once was.',
    'your need for closeness is human.',
    'you don’t have to carry this alone.',
    'loneliness doesn’t mean you’re unloved.',
    'this ache is temporary, not who you are.',
    'you are not invisible. you are felt.',
    'you matter, even in your quietest moments.',
    'this isn’t the end of your story.',
    'there is space for you, always.',
    'you are allowed to reach out.',
    'being alone isn’t a failure.',
    'you are loved beyond what you know.',
    'you are still worth holding.',
    'this moment will shift. stay with it.',
    'someone is grateful you exist.'
  ],
  hopeful: [
    'hope doesn’t need to be loud. just real.',
    'your future is quietly waiting for you.',
    'you’ve survived all your worst days. remember that.',
    'something good is still possible.',
    'the light ahead is real, even if faint.',
    'you are allowed to dream again.',
    'healing opens new doors.',
    'there’s something beautiful on the other side.',
    'you haven’t lost your spark.',
    'this chapter doesn’t end you.',
    'you are becoming, even now.',
    'there’s more to see. don’t stop here.',
    'every breath is a new beginning.',
    'your resilience is building something soft.',
    'hope grows in quiet soil.',
    'what you’re hoping for is hoping for you too.',
    'you are closer than you think.',
    'even tiny hope is still hope.',
    'your story isn’t done unfolding.',
    'trust the process. it’s holding you.'
  ],
  overwhelmed: [
    'one breath at a time. one task at a time.',
    'pause. nothing is more important than your peace.',
    'it’s okay to not do it all.',
    'you don’t need to prove anything right now.',
    'let the weight down for a moment.',
    'you are allowed to rest.',
    'it’s okay to feel like it’s too much.',
    'you won’t always feel this way.',
    'you don’t have to carry it all alone.',
    'your pace is valid.',
    'there’s strength in asking for space.',
    'even slowing down is progress.',
    'you are not behind. you are human.',
    'you deserve softness, even in chaos.',
    'your best today is enough.',
    'you don’t owe anyone your burnout.',
    'you’re allowed to feel tired.',
    'this moment will pass.',
    'your peace matters more than perfection.',
    'let yourself be unproductive. you’re still worthy.'
  ],
  nostalgic: [
    'some memories aren’t meant to be fixed. just felt.',
    'you carry the past gently in your heart.',
    'old moments still teach new things.',
    'it’s okay to miss what once was.',
    'your memories are proof you’ve lived deeply.',
    'not everything has to be moved on from.',
    'your younger self is proud of you.',
    'you’re allowed to smile at the past.',
    'those days shaped your gentleness.',
    'the past is not a mistake. it’s a chapter.',
    'you’ve grown from every version of you.',
    'some songs still carry your old joy.',
    'you are more than the moments you miss.',
    'every goodbye held space for a new hello.',
    'it’s okay to hold on with grace.',
    'your memory is a garden. not everything needs pruning.',
    'you can honor the past without living in it.',
    'some feelings age like poetry.',
    'you’re still writing the story that once began there.',
    'you lived through it. that matters.'
  ],
  joyful: [
    'let joy take up space today.',
    'you deserve to laugh without guilt.',
    'your smile is a little rebellion against the dark.',
    'joy is not selfish. it’s sacred.',
    'you are allowed to enjoy this.',
    'happiness doesn’t need a reason.',
    'you make the moment brighter.',
    'your light is contagious.',
    'this feeling is worth remembering.',
    'you’re allowed to be proud of your joy.',
    'you don’t have to shrink your happiness.',
    'let yourself be fully in this.',
    'you’ve earned this softness.',
    'let joy surprise you again.',
    'you carry sunshine even in your eyes.',
    'you deserve to celebrate without explanation.',
    'this moment is yours. take it in.',
    'your laughter heals more than you know.',
    'let joy be loud today.',
    'you’re a spark in someone’s cloudy day.'
  ],
  discouraged: [
    'you don’t need to feel strong to be brave.',
    'setbacks don’t erase your worth.',
    'you’re doing better than you think.',
    'not everything has to be fixed right now.',
    'your struggle is not a failure.',
    'rest is part of progress.',
    'even standing still is a form of strength.',
    'you are not behind. you are rebuilding.',
    'you don’t have to be okay to keep going.',
    'you still matter, even on the hard days.',
    'your value is not tied to productivity.',
    'you’re not alone in this weight.',
    'growth doesn’t always feel good.',
    'you’ve survived harder things than this.',
    'you’re not broken. you’re tired.',
    'your effort counts, even if unseen.',
    'grace belongs to you too.',
    'healing is not linear.',
    'you’re allowed to start over.',
    'this moment isn’t the whole picture.'
  ],
  reflective: [
    'look how far you’ve come. quietly, steadily.',
    'growth isn’t always loud, but it’s always happening.',
    'your softness is not weakness. it’s wisdom.',
    'you’ve changed in all the best ways.',
    'the quiet moments taught you the most.',
    'reflection is a gift you give yourself.',
    'you’re allowed to honor your past and still move forward.',
    'noticing your growth is part of healing.',
    'you’ve been your own anchor all along.',
    'this season shaped you in ways you’ll understand later.',
    'your silence once held strength.',
    'clarity takes time. keep looking.',
    'you are becoming, not arriving.',
    'every pause has purpose.',
    'you don’t need to rush your understanding.',
    'your awareness is power.',
    'every version of you had value.',
    'you carry quiet wisdom inside you.',
    'you are more whole than you realize.',
    'you can love who you were and still become more.'
  ]
  };

  const moodButtons = document.querySelectorAll('.mood-btn');
  const quoteDisplayMood = document.getElementById('quoteDisplayMood');

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.dataset.mood;
    const quotes = moodQuotes[mood];
    if (!quotes) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Efek "kabut keluar"
    quoteDisplayMood.classList.remove('show');

    // Setelah keluar, ganti teks & masuk lagi
    setTimeout(() => {
      quoteDisplayMood.textContent = selectedQuote;
      quoteDisplayMood.classList.add('show');
    }, 300); // durasi sinkron dengan CSS transition
  });
});


  // ==== GALLERY MODAL VIEW ====
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close-modal');

  if (modal && modalImg && closeModal) {
    document.querySelectorAll('.gallery img').forEach(img => {
      img.classList.add('fade-in');
      img.addEventListener('click', () => {
        modal.classList.add('show');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalImg.classList.remove('zoom-anim');
        void modalImg.offsetWidth;
        modalImg.classList.add('zoom-anim');
      });
    });

    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('show');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.classList.remove('show');
    });
  }

  // ==== EMOJI TRAIL ====
  document.addEventListener('mousemove', (e) => {
    const emojis = ['💖', '💘', '💗', '💓', '💞'];
    const emoji = document.createElement('span');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add('emoji-trail');
    emoji.style.left = `${e.pageX + (Math.random() * 20 - 10)}px`;
    emoji.style.top = `${e.pageY + (Math.random() * 20 - 10)}px`;
    emoji.style.fontSize = `${Math.random() * 16 + 20}px`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1200);
  });
});
