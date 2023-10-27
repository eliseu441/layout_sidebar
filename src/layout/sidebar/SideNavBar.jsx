import React, { useState, useEffect, useRef } from "react";
import "./SideNavBar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/icons/0-circle-fill.svg';
import { Link } from "react-router-dom";
import vivo from './logo.png';

function useOutsideAlerter(ref, isExpanded) {

	useEffect(() => {


		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				if (isExpanded) {
					var checkbox = document.querySelector("#checkbox-menu")
					checkbox.click()
				}
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, isExpanded]);
}



const SideNavBar = (ref) => {
	const [isExpanded, setExpendState] = useState(false);
	const [showSubMenu, setShowSubMenu] = useState(false);

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, isExpanded);
	const ExpansionPanelDetails = ()=>{
		if (isExpanded == false) {
			var checkbox = document.querySelector("#checkbox-menu")
			checkbox.click()
			setExpendState(true)
		}
	}
	const ExpansionReduceDetails = ()=>{
		if (isExpanded == true) {
			var checkbox = document.querySelector("#checkbox-menu")
			checkbox.click()
			setExpendState(false)
		}
	}
	const handleClick = () => {
		setShowSubMenu(!showSubMenu);

	}
	const removeChecked = () => {
		if (isExpanded) {
			
		}
	}
	return (
		<div ref={wrapperRef}
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper" onMouseLeave={() => ExpansionReduceDetails()}onMouseOver={() => ExpansionPanelDetails()}>
				<div className="nav-heading" 
			>
					{isExpanded && (
						<div className="text-size">
							<span><img src={vivo} /></span>
						</div>
					)}
					<input type="checkbox" id="checkbox-menu"  />
					<label for="checkbox-menu">
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>
				<div className="nav-menu">
					<div class="list-group">
						<Link to="/" className="decoration" onClick={e => removeChecked()} >
							<span class="list-group-item list-group-item-action " ><span class="text-margin sidebarHover"><i class="bi bi-pie-chart-fill fs-3 icons-color "></i>{isExpanded && (
								<span class='sidebarHover' style={{ marginLeft: "10px" }}> Dashboard</span>
							)} </span></span>
						</Link>
						<div >
							<span class="list-group-item list-group-item-action dropdown-toggle" onClick={handleClick}><span class="text-margin sidebarHover"><i class="bi bi-bar-chart-fill fs-3 icons-color"></i>{isExpanded && (
								<span style={{ marginLeft: "10px" }}> Sites  Fibra</span>
							)} </span></span>
						</div>
						{showSubMenu && (
							<div class='transitionDown'>
								<div class="list-group">
									<Link to="/circuito" className="decoration" onClick={e => removeChecked()}>
										<span class="list-group-item list-group-item-action"><span class="text-margin sidebarHover"><i class="bi bi-database-fill-up fs-6 icons-color sub-menu"></i>{isExpanded && (
											<span style={{ marginLeft: "20px" }}>Topologia</span>
										)} </span></span>
									</Link>
								</div>
								<div class="list-group">
									<Link to="/editarSite/0" className="decoration" onClick={e => removeChecked()}>
										<span class="list-group-item list-group-item-action"><span class="text-margin sidebarHover"><i class="bi bi-pencil-square fs-6 icons-color sub-menu"></i>{isExpanded && (
											<span style={{ marginLeft: "20px" }}> Editar Site</span>
										)} </span></span>
									</Link>
								</div>
								<div class="list-group">
									<Link to="/equipamento" className="decoration" onClick={e => removeChecked()}>
										<span class="list-group-item list-group-item-action"><span class="text-margin sidebarHover"><i class="bi bi-gear-wide-connected fs-6 icons-color sub-menu"></i>{isExpanded && (
											<span style={{ marginLeft: "20px" }}> Equipamento</span>
										)} </span></span>
									</Link>
								</div>
								
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNavBar;
