import React from "react";
import { connect } from "react-redux";
import { Container, Content, Card, CardItem, Text, Button } from "native-base";
import ChoosenTitle from "../components/ChoosenTitle";
import { addNode, popNode, removeNode } from "../redux/actions";
import { HeaderBackButton } from "react-navigation";

class ChoosePlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <ChoosenTitle
        removeNode={navigation.getParam("removeNode")}
        nodes={navigation.getParam("nodes")}
      />
    ),
    //headerLeft: <HeaderBackButton onPress={()=>(navigation.getParam('popNode', ()=>{}))()}/>,
    headerRight: (
      <Button
        success
        onPress={() => {
          navigation.navigate("ChoosenScreen");
        }}
        style={{
          marginRight: 5,
          marginLeft: 5
        }}
      >
        <Text>OK</Text>
      </Button>
    )
  });

  constructor(props) {
    super(props);
    limit = this.props.navigation.getParam("limit", 0);
    if (limit) {
      this.getPressHandler = id => () => {
        this.props.addNode(this.props.places[id]);
        this.props.navigation.navigate("ChoosenScreen");
      };
    } else {
      this.getPressHandler = id => () => {
        this.props.addNode(this.props.places[id]);
        this.props.navigation.navigate("ChoosePlaceScreen");
      };
    }
  }
  componentWillMount() {
    this.props.navigation.setParams({
      nodes: this.props.nodes,
      popNode: this.props.popNode,
      removeNode: this.props.removeNode
    });
  }
  componentDidUpdate() {
    if (this.props.navigation.getParam("nodes") != this.props.nodes) {
      this.props.navigation.setParams({
        nodes: this.props.nodes
      });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Card
            dataArray={this.props.places.filter(
              p => -1 === this.props.nodes.findIndex(i => p.name == i.name)
            )}
            renderRow={data => (
              <CardItem
                button
                bordered
                onPress={this.getPressHandler(data.item.index)}
              >
                <Text>{data.item.renderName}</Text>
              </CardItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  nodes: state.nodes,
  places: state.places
});
const mapDispatch = {
  addNode,
  popNode,
  removeNode
};
export default connect(
  mapStateToProps,
  mapDispatch
)(ChoosePlaceScreen);
