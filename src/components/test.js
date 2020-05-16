<ApolloProvider client={client}>
  <Router>
    <div className="w-100">
      <Switch>
        <Route path="/dashboard">
          <Dashboard {...state} />
        </Route>

        <Route path="/members">
          <Members />
        </Route>

        <Route path="/tithes">
          <Tithes />
        </Route>
        <Route path="/graphql">
          <Members_ />
        </Route>
      </Switch>
    </div>
    {mainComponent}
    <Route>
      <div>NOT FOUND</div>
    </Route>
  </Router>
</ApolloProvider>;
