import React from 'react'

function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ)=== 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const Color = props=>(
	<div onClick={e=>{props.setColor(props.color);props.update(props.color)}} className="color-option" style={{backgroundColor:props.color}}/>
)

class Settings extends React.Component{
	static initColors(){
		const val = getCookie('color')
		if (val) {
			Settings.setColor(val)
		}
	}
	update(newCol){
		setCookie('color',newCol,90)
	}
	static setColor(color){
		document.documentElement.style.setProperty('--main-background-color',color)
	}
	render(props) {
		return(
			<div className="simple-form">
				<h1>Settings</h1>
				<label>Choose a color:</label>
				<div className="color-picker">
					<Color update={this.update} setColor={Settings.setColor} color="#990000"/>
					<Color update={this.update} setColor={Settings.setColor} color="#690991"/>
					<Color update={this.update} setColor={Settings.setColor} color="#00af0b"/>
					<Color update={this.update} setColor={Settings.setColor} color="#020099"/>
					<Color update={this.update} setColor={Settings.setColor} color="#e89600"/>
				</div>
			</div>
		)
	}
}

export default Settings