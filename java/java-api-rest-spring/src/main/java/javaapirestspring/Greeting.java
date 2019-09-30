/*
 * Copyright (c) 2019 Fernando Daniel Martinez.
 * All rights reserved.
 */

package javaapirestspring;

public class Greeting {

    private final long id;
    private final String content;

    public Greeting ( long id, String content ) {

        this.id      = id;
        this.content = content;

    }

    public long getId () {

        return id;

    }

    public String getContent () {

        return content;

    }
}
