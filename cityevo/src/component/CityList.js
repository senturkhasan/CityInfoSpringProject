import React from 'react';
import axios from 'axios';
import {CITY_REST_API_URL} from '../types/ConstTypes';

class CityList extends React.Component{
    
    
    constructor(props){
        super(props)
        this.state={
            cities:[],
            serviceSate:true
        }

    }
    componentDidMount(){

        this.getCityList();
    }
    handleclickDelete(id,e){
        axios.delete(CITY_REST_API_URL+`/${id}`)
                .then(res=>{
                    if(res.status===200) {
                        this.setState({serviceSate:true})
                        this.getCityList();
                }else{
                    this.setState({serviceSate:false})
                }
                })

    }
    getCityList(){
        axios.get(CITY_REST_API_URL).then((response)=>{
            this.setState({cities:response.data})
        });
    }
    render(){
        return (
            <div>
                {
                    !this.state.serviceSate?
                    <div class="alert alert-danger" role="alert">
                    Silme işleminde hata oluştu!!
                     </div>:null
                }
              
            <div class="container">
                
                <div class="row">
                    <h1 className="text-center">İl-İlçe Listesi</h1>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>
                              <b>İl</b>
                            </td>
                            <td>
                              <b>İlçe</b>
                            </td>
                            <td>
                              <b>İşlem</b>
                            </td>
                            <td>
                              <b>Bölge</b>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cities.map(
                                city =>
                                <tr key={city.id}>
                                    <td>
                                        {city.cityName}
                                    </td>
                                    <td>
                                        {city.cityTown}
                                    </td>
                                    <td>
                                        {city.area}
                                    </td>
                                    <td>
                                    <button type="button" 
                                            class="btn btn-danger"
                                            onClick={(e)=>this.handleclickDelete(city.id,e)}>Çıkar</button>
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                    </table>    
                  
                </div>
            </div>
                
            </div>
        )
    }
}

export default CityList;