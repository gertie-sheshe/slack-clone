import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { firebaseApp } from "../config/firebase";

const db = getFirestore(firebaseApp);

const useFirebase = () => {
  const [channels, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "rooms")
  );

  return [channels, loading, error];
};

const useCurrentRoom = () => {
  const roomId = useSelector(selectRoomId);

  const [roomDetails, loading, error] = useDocument(
    roomId && doc(db, "rooms", roomId)
  );
  return [roomDetails, loading, error];
};

const useMessages = () => {
  const roomId = useSelector(selectRoomId);
  const [roomMessages, loading, error] = useCollection(
    roomId &&
      query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      )
  );
  return [roomMessages, loading, error];
};

export { useFirebase, useCurrentRoom, useMessages };
