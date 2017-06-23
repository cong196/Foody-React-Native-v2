import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import ItemMenu from '../itemMenu/itemMenu';
import icmoinhat from '../../../../img/lstmoinhat_moinhat_active.png';
import icgantoi from '../../../../img/lstmoinhat_gantoi.png';
import icphobien from '../../../../img/lstmoinhat_phobien.png';
import icdukhach from '../../../../img/lstmoinhat_dukhach.png';
import icecard from '../../../../img/lstmoinhat_ecard.png';
import icdatcho from '../../../../img/lstmoinhat_datcho.png';
import icbank from '../../../../img/lstmoinhat_bank.png';
export default class ListViewMoiNhat extends Component {
    render() {
        return (
            <View style = {{flex:1}}>
                <ItemMenu ten={'Mới nhất'} img={icmoinhat} />
                <ItemMenu ten={'Gần tôi'} img={icgantoi} />
                <ItemMenu ten={'Phổ biến'} img={icphobien} />
                <ItemMenu ten={'Du khách'} img={icdukhach} />
                <ItemMenu ten={'Ưu đãi Ecard'} img={icecard} />
                <ItemMenu ten={'Đặt chỗ'} img={icdatcho} />
                <ItemMenu ten={'Ưu đãi thẻ'} img={icbank} />
                <ItemMenu ten={'Đặt giao hàng'} img={icmoinhat} />

                <ItemMenu ten={'Mới nhất'} img={icmoinhat} />
                <ItemMenu ten={'Gần tôi'} img={icgantoi} />
                <ItemMenu ten={'Phổ biến'} img={icphobien} />
                <ItemMenu ten={'Du khách'} img={icdukhach} />
                <ItemMenu ten={'Ưu đãi Ecard'} img={icecard} />
                <ItemMenu ten={'Đặt chỗ'} img={icdatcho} />
                <ItemMenu ten={'Ưu đãi thẻ'} img={icbank} />
                <ItemMenu ten={'Đặt giao hàng'} img={icmoinhat} />


                <ItemMenu ten={'Mới nhất'} img={icmoinhat} />
                <ItemMenu ten={'Gần tôi'} img={icgantoi} />
                <ItemMenu ten={'Phổ biến'} img={icphobien} />
                <ItemMenu ten={'Du khách'} img={icdukhach} />
                <ItemMenu ten={'Ưu đãi Ecard'} img={icecard} />
                <ItemMenu ten={'Đặt chỗ'} img={icdatcho} />
                <ItemMenu ten={'Ưu đãi thẻ'} img={icbank} />
                <ItemMenu ten={'Đặt giao hàng'} img={icmoinhat} />

                <ItemMenu ten={'Mới nhất'} img={icmoinhat} />
                <ItemMenu ten={'Gần tôi'} img={icgantoi} />
                <ItemMenu ten={'Phổ biến'} img={icphobien} />
                <ItemMenu ten={'Du khách'} img={icdukhach} />
                <ItemMenu ten={'3333'} img={icecard} />
                <ItemMenu ten={'2222ỗ'} img={icdatcho} />
                <ItemMenu ten={'11111'} img={icbank} />
                <ItemMenu ten={'000'} img={icmoinhat} />

            </View>
        );
    }
}