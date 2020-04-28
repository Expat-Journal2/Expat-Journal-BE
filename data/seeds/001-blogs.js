
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {
          id: 1, 
          title: 'Scuba Diving in Maldives', 
          textbox: "You've always dreamed of going on a scuba trip to the Maldives right? It's been on your scuba bucket list for years, and you are constantly seeing scuba ads to Maldives, and thinking to yourself 'but how can I afford this?'. Girls that Scuba recently spent 2 weeks in the Maldives in a luxury resort, mid-range resort, on a local island and a liveaboard to see exactly where the best diving was, and how our community can afford to come and dive here too! You're going to be surprised at what we found! Here we break down the benefits/drawbacks and price and costs of each options. It's a big guide - read carefully, save and share, and let us know which one you chose!", 
          created_at: 'Apr 26 2020', 
          img: 'https://images.unsplash.com/photo-1544551763-808e05e86c26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 
          user_id: 1 
        },
        {
          id: 2, 
          title: 'Attempt to See an Aurora', 
          textbox: "The Northern Lights tend to be the star of the show and it's easy to see why. Iceland is one of my top spots on the planet. While there is no promise that you'll see the Northern Lights, making the attempt to is so worth the trip. Likewise, heading down under to see the Southern Lights is an equally magical experience—did you know that was a thing? Yep, you can sometimes see them in New Zealand, Tasmania, and Antarctica!", 
          created_at: 'Apr 25 2020', 
          img: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          user_id: 2
        },
        {
          id: 3, 
          title: 'The Beauty of Machu Picchu', 
          textbox: "Built in the mid-15th century by the Incas, Machu Picchu is set high in the Andes Mountains of Peru, above the Urubamba River valley. Left undiscovered until 1911, even though the Incan empire was conquered by the Spanish in 1532, it's exact use remains a mystery that many have tried (and failed) to solve. Marvelling at the splendour of Machu Picchu wasn't an easy task though, considering that many tourists flock to the location. However early you think you many be, there will likely already be a line in the nearest towns taking early busses up the famous mountain. The journey only gets more difficult from there on out, as the roads leading to the site feature narrow and steep slopes. You can rest assured though that the view from the top of the hill is nothing short of magnificent; and well worth it.", 
          created_at: 'Apr 26 2020', 
          img: 'https://images.unsplash.com/photo-1526052056866-810289073817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          user_id: 2
        },
        {
          id: 4, 
          title: 'The Ethics Of Travel & Volunteering', 
          textbox: "Although the idea of volunteering seems like a wholly good thing that will have a positive impact, it is important to research that the work you will be doing is ethical. Unfortunately, it's become all too common that some organizations and non-profits bringing in Western ideas and volunteers to developing countries cause more hard than good. 'One of the hardest things for new, eager volunteers to understand is that not all organizations—even non-profits—are doing good, necessary work that ethically develops the communities and eco-systems where we volunteer our time. For that reason, take a step back from the planning and instead learn more about core problems facing development projects when they bring in Western volunteers and ideas.' -Shannon O'Donnell. The best projects are those that receive support from the local population. An organization should be working with the local community as opposed to trying to change things against their will. Consider how your volunteer work will support the area in which you are working and the kind of impact you volunteering there may have- both the direct impact and the indirect implications of you working in that area.", 
          created_at: 'Apr 26 2020', 
          img: 'https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          user_id: 1
        },
        {
          id: 5, 
          title: 'Snow, Skiing and Stopover Switzerland in Winters', 
          textbox: "I was in class 5 when a new classmate, Shiv, had joined. Within no time, this little boy with peach complexion and blue eyes had created a massive fan club comprising of classmates and teachers. Besides his chocolaty looks, his last place of residence had earned him brownie points. His eyes would glow when he would describe Switzerland. “Swiss Alps are dreamlike…. trains always run on time…the lakes there are so clear you don’t need a mirror…and there’s absolutely no comparison of Swiss cheese and chocolate”, he said. His words and gestures created the magic that even Yash Raj couldn’t build on 35mm. And, just like that, I fell in love. Not with the boy, of course, but with the place. Since then, I started dreaming about the Swiss Alps. I would imagine the majestic Matterhorn and Jungfrau summits shimmering in the crimson golden-glow of the sunlight as the misty clouds played hide-n-seek in the Bernese Oberland mountains. I would dream of beautiful cows gingerly grazing as the big Swiss bells hanging on their necks made a sweet symphony in the middle of green meadows. ", 
          created_at: 'Apr 28 2020', 
          img: 'https://images.unsplash.com/photo-1474909409572-e05dcf0b081e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          user_id: 2,
        },
        {
          id: 6, 
          title: 'Travels in Thailand', 
          textbox: "Thailand was the first destination I decided to travel to solo. I island hopped, explored Bangkok and, as a young backpacker, ticked off a big bucket list partying until sunrise at the Full Moon Party. While that was back in 2011, it remains one of the most vibrant and beautiful places I’ve ever visited. Often referred to as the “land of smiles,” there is so much to offer travelers in this beautiful and bustling country.Thailand is always welcoming, despite receiving hordes of tourists all year-round. Thailand’s majestic temples pull you in, and you can’t help but be drawn to the history of it all. Thailand’s pristine and turquoise waters are magical, warm and incredibly photogenic which add the perfect touch to a dream holiday.", 
          created_at: 'Apr 28 2020', 
          img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          user_id: 1
        },
      ]);
    });
};
