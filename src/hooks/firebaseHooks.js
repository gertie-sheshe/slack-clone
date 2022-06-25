import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseApp } from "../config/firebase";

const useFirebase = () => {
  const [channels, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "rooms")
  );

  return [channels, loading, error];
};

export default useFirebase;
