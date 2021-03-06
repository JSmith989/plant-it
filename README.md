# Plant-It!
Planning/info app for your backyard garden. Backyard gardening has been a growing hobby(pun intended) especially this crazy year we call 2020. A few of the challenges people run into are not knowing enough details and forgetting what you've planted. One of the features this planting has is a map of the US that will show the zones so you know when to get your garden started. There will be an area where you can choose a vegetable that is already in the database or you can create your own. You can add plants to your garden and plan it out so you're not surprised when a cucumber is growing from where you thought your zucchini was.

## Deployed
https://plant-it-capstone.web.app/ 

## Screenshots
![homePage](https://user-images.githubusercontent.com/67443077/102680113-1855ef80-417b-11eb-960f-bbd8f488b431.png)
![plantsCard](https://user-images.githubusercontent.com/67443077/102680114-19871c80-417b-11eb-896d-1068f189a348.png)
![gardenCarousel](https://user-images.githubusercontent.com/67443077/102680115-1b50e000-417b-11eb-8349-5423fe8caf7c.png)

## Capstone Proposal
https://www.loom.com/share/f442d0120c9940218b91295524a92b5a

## Wireframe
https://www.figma.com/file/rXhu6Qrb3Y049LNdWDc5y5/Plant-It?node-id=0%3A1
![wireframe](images/plantItWireframe.png)

## ERD
https://lucid.app/lucidchart/850e28d8-cdac-42f8-b2f2-4be8ab5f690a/edit?beaconFlowId=7C97A2C1BFB3974E&page=0_0#?folder_id=home&browser=icong
![ERD](https://user-images.githubusercontent.com/67443077/101420610-2e7cc980-38b8-11eb-99cb-69587fde3046.png)

## Code Snippet
```
  const slides = items.map((item) => (
      <CarouselItem
        className="carouselContent"
        tag="div"
        key={item.firebaseKey}

      >
          <Link to={`/gardens/${item.firebaseKey}`}>
      <img className='card-img-top' src={item.image} alt='Card cap' />
        </Link>
          <CarouselCaption className="carouselText" captionText={item.name}/>
      </CarouselItem>
  ));
  ```
