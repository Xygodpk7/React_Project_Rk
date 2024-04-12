// Import the product data from the products module
// Import the Container, HomeBanner, truncateText, and ProductCard components
import Container from './components/Container';
import HomeBanner from './components/HomeBanner';
import NullData from './components/NullData';
import ProductCard from './components/products/ProductCard';
import getProducts, { IProductParams } from '@/actions/getProducts';


interface HomeProps{
  searchParams: IProductParams;
}
// Home component definition
export default async function Home({searchParams} : HomeProps) {

  const products = await getProducts(searchParams)

  if(products.length === 0){
    return <NullData title={'Ooops.... No Product found. Click "All" clear filters' }/>
  }

  function shuffleArray(array:any){
    for(let i = array.length -1; i>0;i--){
      const j=Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const ShuffledProducts = shuffleArray(products)

  return (
    <div>
      {/* Container component for layout styling */}
      <Container>
        <div>
          {/* HomeBanner component for the home page banner */}
          <HomeBanner />
        </div>
        <div 
          className='grid 
          grid-cols-2 
          sm:grid-cols-3
          lg:grid-cols-4 
          xl:grid-cols5 
          2xl:grid-cols-6 
          gap-8'>
          {/* Map through the products and render a ProductCard for each product */}
          {ShuffledProducts.map((product : any) => {
            return <ProductCard data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
