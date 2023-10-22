// import React, { useState } from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import {
//   responsiveScreenHeight,
//   responsiveScreenWidth,
//   responsiveScreenFontSize,
// } from "react-native-responsive-dimensions";

// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(6, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Please Enter Your Full Name"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Please Enter Your Email"),
//   password: Yup.string()
//     .min(8)
//     .required('Please Enter your password')
// });

// const SignupUI = () => {
//   //this for password 1
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   //this is for password 2
//   const [password2, setPassword2] = useState("");
//   const [showPassword2, setShowPassword2] = useState(false);

//   const toggleShowPassword2 = () => {
//     setShowPassword2(!showPassword2);
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         email: "",
//         mobile: "",
//         password: "",
//         confirmPassword: "",
//       }}
//       validationSchema={SignupSchema}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         setFieldTouched,
//         isValid,
//         handleSubmit,
//       }) => (
//         <View style={styles.container}>
//           <Text
//             style={{ fontSize: responsiveScreenFontSize(5), marginBottom: 5 }}
//           >
//             Let's Get Started !
//           </Text>
//           <Text
//             style={{ color: "grey", fontSize: responsiveScreenFontSize(2) }}
//           >
//             Create An Account to Get All The Features
//           </Text>

//           <View style={{ marginTop: 30 }}>
//             <TextInput
//               style={styles.textbox}
//               placeholder=" User Name"
//               value={values.name}
//               onChangeText={handleChange("name")}
//             />
//             {errors.name && <Text>{errors.name}</Text>}
//             <TextInput style={styles.textbox} placeholder=" Email" />
//             <TextInput style={styles.textbox} placeholder=" Phone" />

//             <TextInput
//               style={styles.textbox}
//               placeholder=" Password"
//               secureTextEntry={!showPassword}
//               value={password}
//               onChangeText={setPassword}
//             />

//             <TouchableOpacity
//               onPress={toggleShowPassword}
//               style={styles.showPasswordButton}
//             >
//               <Icon name={showPassword ? "unlock" : "lock"} size={20} />
//             </TouchableOpacity>

//             <TextInput
//               style={styles.textbox}
//               placeholder=" Confirm Password"
//               secureTextEntry={!showPassword2}
//               value={password2}
//               onChangeText={setPassword2}
//             />

//             <TouchableOpacity
//               onPress={toggleShowPassword2}
//               style={styles.showPasswordButton2}
//             >
//               <Icon name={showPassword2 ? "unlock" : "lock"} size={20} />
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity>
//             <Text style={styles.box}>Create Account</Text>
//           </TouchableOpacity>

//           <View style={{ flexDirection: "row", marginTop: 18 }}>
//             <Text
//               style={{
//                 fontSize: responsiveScreenFontSize(2),
//                 marginHorizontal: 2,
//               }}
//             >
//               Already Have An Account?
//             </Text>
//             <Text
//               style={{
//                 fontSize: responsiveScreenFontSize(2),
//                 color: "#87CEEB",
//               }}
//             >
//               LogIn
//             </Text>
//           </View>
//         </View>
//       )}
//     </Formik>
//   );
// };

// const styles = StyleSheet.create({
//   textbox: {
//     fontSize: responsiveScreenFontSize(2),
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 10,
//     width: responsiveScreenWidth(70),
//     height: responsiveScreenHeight(7),
//     textAlignVertical: "center",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   container: {
//     marginTop: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor:'#DCDCDC'
//   },
//   box: {
//     backgroundColor: "black",
//     width: responsiveScreenWidth(38),
//     height: responsiveScreenHeight(7),
//     borderRadius: 20,
//     color: "#fff",
//     fontSize: 20,
//     fontSize: responsiveScreenFontSize(3),
//     textAlignVertical: "center",
//     textAlign: "center",
//   },
//   showPasswordButton: {
//     position: "absolute",
//     right: 10,
//     top: 226,
//   },
//   showPasswordButton2: {
//     position: "absolute",
//     right: 10,
//     top: 298,
//   },
// });

// export default SignupUI;

