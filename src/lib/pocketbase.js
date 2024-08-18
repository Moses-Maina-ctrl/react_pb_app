import Pocketbase from "pocketbase";

const pb = new Pocketbase(import.meta.env.REACT_APP_PB_URL);

export default pb;