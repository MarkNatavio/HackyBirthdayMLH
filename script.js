var quotes = [
  "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine. - Jack Ma",
  "Positivity, confidence, and persistence are key in life, so never give up on yourself. - Khalid",
  "There is no substitute for hard work. Never give up. Never stop believing. Never stop fighting. - Hope Hicks",
  "Never, never, never give up. - Winston Churchill",
  "It is often hard to see the light at the end of the tunnel. But when you are in those tough, dark spots, try to find the motivation to hang in there",
  "Freedom is not worth having if it does not include the freedom to make mistakes. - Gandhi",
  "Do not quit. Suffer now and live the rest of your life as a champion. - Muhammad Ali",
  "Do not watch the clock; do what it does. Keep going. -Sam Levenson",
  "Even if you fall on your face, you are still moving forward. -Victor Kiam",
  "It always seems impossible until its done. - Nelson Mandela",
  "If you do not turn your life into a story, you just become a part of someone elses story. - Terry Pratchett",
  "Even if you are on the right track, you will get run over if you just sit there. -Will Rogers",
  "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr.",
  "Trust in yourself, believe that your voice matters, and know that your words are good enough. -Amber Gordon",
  "Well-behaved woman seldom make history. - Laurel Thatcher Ulrich",
  "Having role models who are the same gender as you, who look like you, who came from a similar background as yours, can go a long way. - Alisha Ramos",
  "If we do not share our stories and shine a light on inequities, things will not change. - Ellen Pao, Ex-CEO of Reddit",
  "Computing is too important to be left to men. - Karen Sparck Jones",
  "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
  "There is only one corner of the universe you can be certain of improving, and that is your own self. - Aldous Huxley",
  "You can, you should, and if you are brave enough to start, you will. - Stephen King",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live - John Woods",
  "Learn to ask for things. You will constantly be figuring out how to acquire customers, investors, mentors, advisors, staff, and so on. Be concise, relevant, and brave. - Angie Chang",
  "It always seems impossible until it is done. - Nelson Mandela",
  "Life is a series of building, testing, changing and iterating. - Lauren Mosenthal",
  "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - Rice Cook",
  "That is the thing about people who think they hate computers. What they really hate is lousy programmers. - Larry Niven",
  "Teach a man to program, frustrate him for a lifetime. - Muhammad Waseem",
  "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
  "Take positive care of your mind, and it would surely take positive care of your life. - Edmond Mbiaka",
  "Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code. - Edsger W. Dijkstra",
  "Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail. - Max Kanat-Alexander",
  '"Quality is not an act, it is a habit. - Aristotle'
];

var randomItem = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quotes").innerHTML = "<h1>" + randomItem + "</h1>";

document.getElementById("w3schools").addEventListener("click", w3schools);

document.getElementById("freecc").addEventListener("click", fcc);

document.getElementById("codeac").addEventListener("click", codeac);

document.getElementById("elo").addEventListener("click", elo);

document.getElementById("khan").addEventListener("click", khan);

document.getElementById("mozilla").addEventListener("click", mozilla);

document.getElementById("github").addEventListener("click", github);

document.getElementById("stack").addEventListener("click", stack);

document.getElementById("codepen").addEventListener("click", codepen);

document.getElementById("hackerrank").addEventListener("click", hackerrank);

document.getElementById("leetcode").addEventListener("click", leetcode);

document.getElementById("hackerearth").addEventListener("click", hackerearth);

document.getElementById("devpost").addEventListener("click", devpost);

document.getElementById("job").addEventListener("click", job);

function w3schools(){
  window.location='https://www.w3schools.com/';
}

function fcc(){
  window.location='https://www.freecodecamp.org';
}

function codeac(){
    window.location='https://www.codecademy.com';
  }

function elo(){
  window.location='https://eloquentjavascript.net';
}

function khan(){
  window.location='https://www.khanacademy.org/';
}

function mozilla(){
  window.location='https://www.mozilla.org/en-US';
}

function github(){
  window.location='https://github.com/';
}

function stack(){
  window.location='https://www.stackoverflow.com';
}

function codepen(){
  window.location='https://www.codepen.io'
}

function hackerrank(){
	window.location='https://www.hackerrank.com/';
}

function leetcode(){
	window.location='https://leetcode.com/';
}

function hackerearth(){
	window.location='https://www.hackerearth.com/';
}

function devpost(){
  window.location='https://devpost.com/';
}

function job(){
  window.location='https://www.computerscience.org/resources/jobs-in-computer-science';
}