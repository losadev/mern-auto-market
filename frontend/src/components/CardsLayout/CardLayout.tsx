import Card from "./Card"

const CardLayout = () => {
  return (
    <div className="px-4 grid grid-cols-1 gap-4 py-8">
      <Card id="1" gasoline="Diesel" miles={2000} price={25000} tag="New" title="Lambo" year={2022} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fbig0%2F540%2FLamborghini_Light_Blue_488789.jpg&f=1&nofb=1&ipt=ca555b845a8577fb501c5393b0d54013f23924b83101c3f52b9f7d0225fa8188&ipo=images"/>
      <Card id="2" gasoline="Diesel" miles={2000} price={25000} tag="" title="Lambo 2.0" year={2022} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2F4b%2F6f%2FLamborghini_Gallardo-138683.jpg!d&f=1&nofb=1&ipt=915c6e76e80b54701dea63551a6abe1d5a4fcaf643330ece02dda8d65b29a043&ipo=images"/>
    </div>
  )
}

export default CardLayout