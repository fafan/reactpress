<?php

function my_namespace_comment_schema() {
    $schema = array(
        // This tells the spec of JSON Schema we are using which is draft 4.
        '$schema'              => 'http://json-schema.org/draft-04/schema#',
        // The title property marks the identity of the resource.
        'title'                => 'comment',
        'type'                 => 'object',
        // In JSON Schema you can specify object properties in the properties attribute.
        'properties'           => array(
            'id' => array(
                'description'  => esc_html__( 'Unique identifier for the object.', 'my-textdomain' ),
                'type'         => 'integer',
                'context'      => array( 'view', 'edit', 'embed' ),
                'readonly'     => true,
            ),
            'author' => array(
                'description'  => esc_html__( 'The id of the user object, if author was a user.', 'my-textdomain' ),
                'type'         => 'integer',
            ),
            'content' => array(
                'description'  => esc_html__( 'The content for the object.', 'my-textdomain' ),
                'type'         => 'string',
            ),
        ),
    );

    return $schema;
}

function my_namespace_comment_args() {
		return array(
  			'my-arg' => array(
    				'description' => 'hehehe',
    				'type' => 'string',
    				'required' => false
  			)
		);
}

function my_namespace_comment_sample( $request ) {
    $args = array( 'post_per_page' => 5 );
    $comments = get_comments( $args );
    return rest_ensure_response( empty($comments) ? array() : $comments );
}

add_action( 'rest_api_init', function(){
    $namespace = 'my_namespace/v1';
    $endpoint = '/comments';
    register_rest_route( $namespace, $endpoint, array(
        array(
            'methods'  => 'GET',
            'callback' => 'my_namespace_comment_sample',
            'args' => my_namespace_comment_args()
        ),
        'schema' => 'my_namespace_comment_schema'
    ));
});

?>
