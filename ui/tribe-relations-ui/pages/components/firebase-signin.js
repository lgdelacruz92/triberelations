import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function FirebaseSignin(props) {
    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            props.firebase.firebase_.auth.GoogleAuthProvider.PROVIDER_ID,
            props.firebase.firebase_.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },
    };
    return (
        <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={props.firebase.auth()}
            />
        </div>
    );
}
