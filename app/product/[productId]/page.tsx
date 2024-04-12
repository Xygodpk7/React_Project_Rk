import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import {getCurrentUser } from "@/actions/getCurrentUser";
import getProductsById from "@/actions/getProductById";


interface IPrams{
  productId?:string;
}
const Products =  async({ params }: { params: IPrams }) => {
  console.log("params", params);

  const product = await getProductsById(params);
  const user = await getCurrentUser();

  if(!product) return <NullData title="Ooops! Product with the given id does not exist"/>

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user}/>

          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Products;
