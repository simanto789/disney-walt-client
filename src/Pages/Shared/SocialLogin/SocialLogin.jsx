import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";




const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary"> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;