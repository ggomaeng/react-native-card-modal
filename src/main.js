/**
 * Created by ggoma on 2016. 11. 22..
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    LayoutAnimation
} from 'react-native';

import CardModal from './components/card-modal';
import NavigationBar from 'react-native-navbar';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: true,
        }
    }

    renderNav() {

        const titleConfig = {
            title: 'react-native-card-modal',
        };

        return (
            <NavigationBar
                title={titleConfig}/>
        )

    }

    disableScroll() {
        this.setState({scroll: !this.state.scroll});
    }

    render() {

        return (
            <ScrollView scrollEnabled={this.state.scroll} style={styles.container}>
                <CardModal title={'Walmart'}
                           description={'Electronics, home, furniture, and more'}
                           image={require('./img/walmart-logo.png')}
                           color={'#0E48BE'}
                           content={'What started small, with a single discount store and the simple idea of selling more for less, has grown over the last 50 years into the largest retailer in the world. Today, nearly 260 million customers visit our more than 11,500 stores under 63 banners in 28 countries and e-commerce sites in 11 countries each week. With fiscal year 2016 revenue of $482.1 billion, Walmart employs 2.3 million associates worldwide – 1.5 million in the U.S. alone. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.'}
                           onClick={() => this.disableScroll()}
                           due={3}
                />
                <CardModal title={'Taco Bell'}
                           description={'Tacos, burritos, and more tacos'}
                           image={require('./img/tacobell-logo.jpg')}
                           color='#662BAB'
                           content={'Taco Bell is an American chain of fast-food restaurants based in Irvine, California. A subsidiary of Yum! Brands, Inc., they serve a variety of Tex-Mex foods, including tacos, burritos, quesadillas, nachos, other specialty items, and a variety of "value menu" items. Taco Bell serves more than 2 billion customers each year in 6,407 restaurants, more than 80 percent of which are owned and operated by independent franchisees and licensees.'}
                           onClick={() => this.disableScroll()}
                           due={5}
                />
                <CardModal title={'Walgreens'}
                           description={'Prescribed medicine, contact lenses, and more'}
                           image={require('./img/walgreens-logo.png')}
                           color={'#fc3758'}
                           content={'In December 2014, Walgreens completed its strategic combination with Alliance Boots to establish Walgreens Boots Alliance, Inc., forging the first global pharmacy-led, health and wellbeing enterprise. The combination brought together two leading companies with iconic brands, complementary geographic footprints, shared values and a heritage of trusted health care services through community pharmacy care and pharmaceutical wholesaling.  Both companies have more than a century’s worth of experience in customer and patient care. Walgreens is today part of the Retail Pharmacy USA division of Walgreens Boots Alliance.'}
                           onClick={() => this.disableScroll()}
                           due={4}
                />
                <CardModal title={'Apple'}
                           description={'iPhone, iPad, Mac, and Apple Watch'}
                           image={require('./img/apple-logo.png')}
                           color='black'
                           content={'Apple is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.'}
                           onClick={() => this.disableScroll()}
                           due={1}
                />
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        paddingTop: 20
    },
    box: {
        backgroundColor: 'red'
    },
    button: {
        borderColor: 1,
        borderWidth: 1,
    }
})

