namespace bwgr {

	type DispSet<T> = React.Dispatch<React.SetStateAction<T>>;

	type Status = "offline" | "signedin" | "signedout" | "loading";

}