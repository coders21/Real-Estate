import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { getProperties } from "../features/properties/propertySlice";




const PropertiesPage = () => {
	
	// Use the useSelector hook to access the Redux state
	const {properties,isLoading,isSuccess} = useSelector((state)=>state.properties)
	// Use the useDispatch hook to get the dispatch function
	const dispatch=useDispatch()
	// Use useEffect to dispatch the getProperties action when the component mounts
	useEffect(()=>{
		dispatch(getProperties())
	},[dispatch])

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<Container>
				<Row>
					<Col className="mg-top text-center">
						<h1>Our Catalog of properties</h1>
						<hr className="hr-text" />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default PropertiesPage;