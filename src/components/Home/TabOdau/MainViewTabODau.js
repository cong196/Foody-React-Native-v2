import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image,ScrollView
} from 'react-native';
import Content from './Content/Content';
import ListViewMoiNhat from './Content/ListViewMoiNhat';
import ListViewDanhMuc from './Content/ListViewDanhMuc';
import ListViewQuanHuyen from './Content/ListViewQuanHuyen';
import icdown from '../../../img/ic_down.png';
export default class MainViewTabODau extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHienThiNoiDung: true,
            isHienThiListMoiNhat: false,
            isHienThiListDanhMuc: false,
            isHienThiListQuanHuyen: false,
        }
    }
    doitinh() {
        const { doitinh } = this.props;
        doitinh();
    }

    clickMoiNhat() {
        if (this.state.isHienThiListMoiNhat) {
            this.setState({
                isHienThiNoiDung: true,
                isHienThiListMoiNhat: false,
                isHienThiListDanhMuc: false,
                isHienThiListQuanHuyen: false,
            })
        }
        else {
            this.setState({
                isHienThiNoiDung: false,
                isHienThiListMoiNhat: true,
                isHienThiListDanhMuc: false,
                isHienThiListQuanHuyen: false,
            })
        }
    }

    clickDanhMuc() {
        if (this.state.isHienThiListDanhMuc) {
            this.setState({
                isHienThiNoiDung: true,
                isHienThiListMoiNhat: false,
                isHienThiListDanhMuc: false,
                isHienThiListQuanHuyen: false,
            })
        }
        else {
            this.setState({
                isHienThiNoiDung: false,
                isHienThiListMoiNhat: false,
                isHienThiListDanhMuc: true,
                isHienThiListQuanHuyen: false,
            })
        }
    }

    clickQuanHuyen() {
        if (this.state.isHienThiListQuanHuyen) {
            this.setState({
                isHienThiNoiDung: true,
                isHienThiListMoiNhat: false,
                isHienThiListDanhMuc: false,
                isHienThiListQuanHuyen: false,
            })
        }
        else {
            this.setState({
                isHienThiNoiDung: false,
                isHienThiListMoiNhat: false,
                isHienThiListDanhMuc: false,
                isHienThiListQuanHuyen: true,
            })
        }
    }
    render() {

        var { container, bar, subtitle, icdown } = style;
        const lstDanhMuc = <ListViewDanhMuc />;
        const lstMoiNhat = <ListViewMoiNhat />;
        let lstQuanHuyen = <ListViewQuanHuyen />;
        return (
            <View style={container}>
                <View style={bar}>
                    <TouchableOpacity
                        style={subtitle}
                        onPress={() => { this.clickMoiNhat() }}
                    >
                        <Text>Mới nhất</Text>
                        <Image
                            source={require('../../../img/ic_down.png')}
                            style={icdown}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity

                        style={[subtitle, {
                            borderRightWidth: 1,
                            borderRightColor: '#e9ebee',
                            borderLeftWidth: 1,
                            borderLeftColor: '#e9ebee',
                        }]}
                        onPress={() => { this.clickDanhMuc() }}
                    >
                        <Text>Danh mục</Text>
                        <Image
                            source={require('../../../img/ic_down.png')}
                            style={icdown}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={subtitle}
                        onPress={() => { this.clickQuanHuyen() }}
                    >
                        <Text>TPHCM</Text>
                        <Image
                            source={require('../../../img/ic_down.png')}
                            style={icdown}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                {
                    this.state.isHienThiNoiDung ? <Content /> :
                        (this.state.isHienThiListMoiNhat ? lstMoiNhat : 
                        (this.state.isHienThiListDanhMuc ? lstDanhMuc :
                         lstQuanHuyen))
                }
                </ScrollView>
            </View>
        );
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9ebee'
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
        paddingHorizontal: 7,
        backgroundColor: 'white',
    },
    subtitle: {
        flex: 1,
        alignItems: 'center',
    },
    icdown: {
        height: 7,
        width: 7
    }
})


/*

<TouchableOpacity
                    onPress={() => { this.doitinh() }}
                >
                    <Text>Đổi tỉnh thành</Text>
                </TouchableOpacity>

*/