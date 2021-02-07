import React from 'react';
import axios from 'axios';
import {CITY_REST_API_URL} from '../types/ConstTypes';

class CityComponent extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            cities:{
                cityName:'',
                cityTown:'',
            },
            cityvalue:'',
            townvalue:'',
            region:'',
            serviceSate:false,
        }
        this.cityhandleChange=this.cityhandleChange.bind(this);
        this.addCityInfo=this.addCityInfo.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        
    }

    componentDidMount(){
        axios.get(CITY_REST_API_URL).then((response)=>{
            this.setState({cities:response.data})
        });
    }

    cityhandleChange=(e)=>{
        console.log(e.target.selectedOptions[0].text);
        let item =this.state.cities;
        item.cityName=e.target.selectedOptions[0].text;
        this.setState({cityvalue:e.target.value,
                      cities:item
                       })
    }
    townhandleChange=(e)=>{
        console.log(e.target.selectedOptions[0].text);
        let item =this.state.cities;
        item.cityTown=e.target.selectedOptions[0].text;
        this.setState({townvalue:e.target.value,
                       cities:item})
    }
    addCityInfo(){
        let item={
            "cityName":this.state.cities.cityName,
            "cityTown":this.state.cities.cityTown,
            "area":this.state.region
        }
        axios.post(CITY_REST_API_URL,item)
                .then(res=>{
                    if(res.status===200) 
                        this.setState({serviceSate:true})
                })
    }
    handleInputChange(event){
       this.setState({region:event.target.value})
    }
    render(){
        const cityData= require('../il.json');
        const townData= require('../ilce.json');
        const cityList = cityData.map((item) =>
                                        <option value={item.id} 
                                                key={item.name}>
                                                {item.name} 
                                        </option>);
        const townList =(il_id)=>townData.filter(item=>item.il_id===il_id).map((item) => <option value={item.id} key={item.id}>{item.name}</option>);
       /* const filterObject = (obj, filter, filterValue) => 
        Object.keys(obj).reduce((acc, val) => 
        (obj[val][filter] === filterValue ? acc : {
            ...acc,
            [val]: obj[val]
        }                                        
        ), {});*/


        return (
            <div>
                <h1 style={{textAlign: "center",marginBottom:"30px"}}>Bilgi Ekleme</h1>
                
               <div class="container">
                <div class="row">
                    <div class="col">
                        <select id="city" 
                                class="form-control"
                                onChange={this.cityhandleChange}
                                
                                value={this.state.cityvalue}>
                           <option selected>İl Seçimi</option>
                           {cityList}
                        </select>
                    </div>
                    <div class="col">
                        <select id="town" 
                                class="form-control"
                                onChange={this.townhandleChange}
                                value={this.state.townvalue}>
                           <option selected>İlçe Seçimi</option>
                           {townList(this.state.cityvalue)}
                        </select>
                    </div>
                    <div class="col">
                            <input
                                type="text"
                                placeholder="Bölge bilgisi"
                                defaultValue=""
                                value={ this.state.region }
                                onChange={ this.handleInputChange }
                            />
                    </div>
                    <button type="button" 
                            class="btn btn-success"
                            disabled={!this.state.cities.cityName
                                      || this.state.cities.cityName==="İl Seçimi" 
                                      || !this.state.cities.cityTown
                                      || this.state.cities.cityTown==='İlçe Seçimi'
                                      }
                                     
                            onClick={this.addCityInfo.bind(this)}>Ekle</button>
                </div>
            </div>
            <div class="container" style={{marginTop:100}}>
                     {
                        this.state.serviceSate?
                        <div class="alert alert-success" role="alert">
                            Ekleme işlemi başarılı
                        </div>:null
                    }
            </div>
           
               
            </div>
        )
    }
}

export default CityComponent;